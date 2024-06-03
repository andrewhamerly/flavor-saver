

const addRecipeFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#recipe-title').value.trim();
    const description = document.querySelector('#recipe-description').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
    const imageUrl = document.querySelector('#recipe-image-url').value.trim();
    const allergens = document.querySelector('#recipe-allergens').value.trim();
  
    if (title && description && ingredients && instructions && imageUrl && allergens) {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ title, description, ingredients, instructions, imageUrl, allergens }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); // Redirect to homepage or recipes page
      } else {
        alert('Failed to add recipe.');
      }
    }
  };
  
document
    .querySelector('.add-recipe-form')
    .addEventListener('submit', addRecipeFormHandler);

const editRecipeFormHandler = async (event) => {
    event.preventDefault();
    
    const id = document.querySelector('#recipe-id').value.trim();
    const title = document.querySelector('#recipe-title').value.trim();
    const description = document.querySelector('#recipe-description').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
    const imageUrl = document.querySelector('#recipe-image-url').value.trim();
    const allergens = document.querySelector('#recipe-allergens').value.trim();
    
    if (id && title && description && ingredients && instructions && imageUrl && allergens) {
        const response = await fetch(`/api/recipes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description, ingredients, instructions, imageUrl, allergens }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
        document.location.replace('/'); // Redirect to homepage or recipes page
        } else {
        alert('Failed to update recipe.');
        }
    }
    };
    
    document
    .querySelector('.edit-recipe-form')
    .addEventListener('submit', editRecipeFormHandler);

const deleteRecipeHandler = async (event) => {
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
    });
    
    if (response.ok) {
        // Remove the recipe from the DOM
        event.target.closest('.recipe-item').remove();
    } else {
        alert('Failed to delete recipe.');
    }
    };
    
    document.addEventListener('DOMContentLoaded', loadUserProfile);

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


//function to remove item from a users favorites list

    // const removeFavoriteHandler = async (event) => {
    //     if (event.target.matches('.remove-favorite')) {
    //       const recipeId = event.target.getAttribute('data-recipe-id');
      
    //       const response = await fetch('/api/favorites/favorite', {
    //         method: 'DELETE',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ recipeId }),
    //       });
      
    //       if (response.ok) {
    //         document.location.reload(); // Reload the page to update the list of favorites
    //       } else {
    //         alert('Failed to remove favorite.');
    //       }
    //     }
    //   };
      
    //   document.addEventListener('click', removeFavoriteHandler);
    