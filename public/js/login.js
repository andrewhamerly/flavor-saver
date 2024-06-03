const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        showAlert('Failed to log in. Please check your email and password and try again.');
    }
} else {
    showAlert('Please enter both email and password.');
}
};

const showAlert = (message) => {
  const alertContainer = document.querySelector('#alert-container');
  const alert = document.createElement('div');
  alert.className = 'alert alert-danger';
  alert.textContent = message;
  alertContainer.appendChild(alert);

  setTimeout(() => {
      alert.remove();
  }, 5000);
};
  


 
  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

