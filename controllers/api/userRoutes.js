const express = require('express')
const router = express.Router();
const {User} = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth')

router.get('/api/user/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [Recipe]
    });
    if (user) {
      const userData = user.get({ plain: true });
      userData.profileImageUrl = userData.profileImageUrl || '/images/user-profile-placeholder.png';
      res.json(userData);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await User.findOne({ where: { email } });

    if (!userData) {
      return res.status(400).json({ error: 'Incorrect email or password' });
    }

    const validPassword = await bcrypt.compare(password, userData.password);

    if (!validPassword) {
      return res.status(400).json({ error: 'Incorrect email or password' });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to log in' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;