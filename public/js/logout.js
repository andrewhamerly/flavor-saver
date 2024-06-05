const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#logout').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      logout();
    });
  });
  