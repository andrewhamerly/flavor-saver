const loadUserProfile = async () => {
    const userId = document.querySelector('#user-id').value.trim();
    
    const response = await fetch(`/api/users/${userId}`);
    
    if (response.ok) {
        const userData = await response.json();
    
        // Update the user profile section
        document.querySelector('#profile-username').textContent = userData.username;
        document.querySelector('#profile-bio').textContent = userData.bio;
        document.querySelector('#profile-image').src = userData.profileImageUrl || 'public/images/user-profile-placeholder.png';
    
        // Clear the existing recipes list
        const recipeList = document.querySelector('.recipe-list');
        recipeList.innerHTML = '';
    
        // Add the user's recipes to the recipe list
        userData.recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item', 'bg-white', 'shadow', 'rounded-lg', 'p-4');
        recipeItem.innerHTML = `
            <img src="${recipe.imageUrl}" alt="${recipe.title}" class="w-full h-40 object-cover rounded-t-lg">
            <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-900">${recipe.title}</h3>
            <p class="text-gray-600">${recipe.description}</p>
            <button data-id="${recipe.id}" class="delete-recipe-btn bg-red-500 text-white p-2 rounded">Delete</button>
            </div>
        `;
        recipeList.appendChild(recipeItem);
        });
    
        // Add event listeners for delete buttons
        document.querySelectorAll('.delete-recipe-btn').forEach(button => {
        button.addEventListener('click', deleteRecipeHandler);
        });
    } else {
        alert('Failed to load user profile.');
    }
    };

    let button = document.getElementById("loginButton");
    button.addEventListener("click", function() {
        document.location.replace('/login');
    });
    let registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", function() {
        document.location.replace('/register');
    });
    let homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function() {
        document.location.replace('/home');
    });

    let ctaButton = document.getElementById('ctaButton');
    ctaButton.addEventListener("click", function() {
        document.location.replace('/addNewRecipe');
    });

// function to remove item from a users favorites list
    const removeFavoriteHandler = async (event) => {
        if (event.target.matches('.remove-favorite')) {
          const recipeId = event.target.getAttribute('data-recipe-id');
      
          const response = await fetch('/api/favorites/favorite', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipeId }),
          });
      
          if (response.ok) {
            document.location.reload(); // Reload the page to update the list of favorites
          } else {
            alert('Failed to remove favorite.');
          }
        }
      };
      
      document.addEventListener('click', removeFavoriteHandler);
    