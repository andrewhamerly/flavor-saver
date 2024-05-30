const express = require('express')
const router = express.Router();
const {User} = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
        })
        res.status(200).json(userData);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
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

  router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!'});
          return;
        }
        res.status(200).json(userData);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
        if (req.session.user_id !== req.params.id) {
            res.status(403).json({ message: 'You do not have permission to update this user' });
            return;
        }

        const userData = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
            individualHooks: true, // Ensure hooks are run, e.g., password hashing
        });

        if (!userData[0]) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
      if (req.session.user_id !== req.params.id) {
          res.status(403).json({ message: 'You do not have permission to delete this user' });
          return;
      }

      const userData = await User.destroy({
          where: {
              id: req.params.id,
          },
      });

      if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
      }

      req.session.destroy(() => {
          res.status(204).end();
      });
  } catch (err) {
      console.error(err);
      res.status(400).json(err);
  }
});

  module.exports = router;
