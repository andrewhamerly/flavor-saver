const addRecipeFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#recipe-title').value.trim();
    const description = document.querySelector('#recipe-description').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
    const imageUrl = document.querySelector('#recipe-image-url').value.trim();
    const allergens = document.querySelector('#recipe-allergens').value.trim();
    const ingredientsInput = document.querySelector('#ingredients').value.trim();

    const ingredients = ingredientsInput.split(',').map(segment => {
      const [quantity, unit, ...nameParts] = segment.trim().split(' ');
      const name = nameParts.join(' ');
      return { quantity, unit, name };
  });
  
    if (title && description && instructions && imageUrl && allergens &&  ingredients.every(ingredient => ingredient.quantity && ingredient.unit && ingredient.name)) {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ title, description, ingredients, instructions, imageUrl, allergens }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
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
      document.location.replace('/'); // Redirect to homepage
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
  
  