# Flavor Saver

Appreciating, recognizing, and organizing recipes is one of the pleasures of life.

An app that allows for food flavor lovers to discover new recipes, save their favorites for reference, and share their special recipes with others will help foster a supportive food community.

Welcome to **Flavor Saver**, your go-to recipe database app designed to help you save, share, and explore delicious recipes with ease.

## <span style="color: orange;">Table of Contents</span>

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Models](#models)
- [API Endpoints](#api-endpoints)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## <span style="color: orange;">Introduction</span>

**Flavor Saver** is a web application where users can create, store, and manage their favorite recipes. Users can also browse recipes created by others, save them to their favorites, and even like recipes they find appealing. The application ensures that users with dietary restrictions can filter recipes based on allergens.

Website: [www.flavorsaverapp.com](http://www.flavorsaverapp.com)

## <span style="color: orange;">Features</span>

- User Authentication
  - Sign up, log in, log out
  - Password encryption

- Recipe Management
  - Create, read, update, and delete recipes
  - Add ingredients with quantities and units
  - Upload and display recipe images
  - Include detailed instructions and descriptions

- Allergens Management
  - Tag recipes with allergens
  - Filter recipes by allergens

- User Interactions
  - Like and favorite recipes
  - View most liked and most favorited recipes

## <span style="color: orange;">Technologies Used (Needs Review)</span>

![JavaScript](https://img.shields.io/badge/JavaScript-blue) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Express.js](https://img.shields.io/badge/Express.js-blue) ![MySQL](https://img.shields.io/badge/MySQL-blue) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

- **Backend**: Node.js, Express, Sequelize, PostgreSQL
- **Frontend**: React, Redux, HTML, CSS
- **Authentication**: JWT, bcrypt
- **Hosting**: Heroku, Netlify
- **Others**: Multer (for image uploads), Cloudinary (for image storage)

## <span style="color: orange;">Installation (Needs Review)</span>

Steps to kickstart the project:<br />1. **Copy Link**: Hit the "Code" button in this GitHub repo to copy the link.<br />2. **Clone**: In GitBash, execute the command `git clone [paste link here]`.<br />3. **NPM**: Install Node Package Manager with `npm init -y`.<br />4. **Inquirer**: Get npm's inquirer package by running `npm install inquirer`.<br />5. **PG**: Get npm's pg package by running `npm install pg`.<br />6. **PostgreSQL**: Setup PostgreSQL database by running `psql -U postgres` followed by entering your user database password and then creating the database by running `\i db/schema.sql`.<br />7. **Seeding**: Optionally, you can seed the database with info by running `\i db/seeds.sql`.

## <span style="color: orange;">Usage</span>

Once the server is running, you can access the application at `http://localhost:3001`.

- **Sign up or log in** to create a new account.
- **Create new recipes** by filling in the title, description, ingredients, instructions, and uploading an image.
- **Browse recipes** and use the search functionality to find recipes based on keywords or allergens.
- **Save recipes** to your favorites and **like recipes** to show appreciation.

## <span style="color: orange;">Models</span>

### User
- id
- username
- email
- password (hashed)
- createdAt
- updatedAt

### Recipe
- id
- title
- description
- instructions
- imageUrl
- users_id (foreign key)
- createdAt
- updatedAt

### Ingredient
- id
- name
- quantity
- unitId (foreign key)
- recipeId (foreign key)
- createdAt
- updatedAt

### Allergen
- id
- name
- createdAt
- updatedAt

### RecipeAllergen
- id
- recipeId (foreign key)
- allergenId (foreign key)
- createdAt
- updatedAt

### Favorite
- id
- userId (foreign key)
- recipeId (foreign key)
- createdAt
- updatedAt

### Like
- id
- userId (foreign key)
- recipeId (foreign key)
- createdAt
- updatedAt

### Unit
- id
- name
- createdAt
- updatedAt

## <span style="color: orange;">API Endpoints</span>

Here are some of the primary API endpoints available:

### Users
- `POST /users/register` - Register a new user
- `POST /users/login` - Login a user

### Recipes
- `GET /recipes` - Get all recipes
- `GET /recipes/:id` - Get a single recipe
- `POST /recipes` - Create a new recipe
- `PUT /recipes/:id` - Update a recipe
- `DELETE /recipes/:id` - Delete a recipe

### Ingredients
- `GET /recipes/:recipeId/ingredients` - Get all ingredients for a recipe
- `POST /recipes/:recipeId/ingredients` - Add an ingredient to a recipe
- `PUT /ingredients/:id` - Update an ingredient
- `DELETE /ingredients/:id` - Delete an ingredient

### Allergens
- `GET /allergens` - Get all allergens
- `POST /allergens` - Create a new allergen
- `PUT /allergens/:id` - Update an allergen
- `DELETE /allergens/:id` - Delete an allergen

### Favorites
- `POST /favorites` - Add a recipe to favorites
- `DELETE /favorites/:id` - Remove a recipe from favorites

### Likes
- `POST /likes` - Like a recipe
- `DELETE /likes/:id` - Unlike a recipe

## <span style="color: orange;">Future Enhancements (Needs Review)</span>

We have several ideas for future enhancements to make **Flavor Saver** even better:

<span style="color: green;">**User Comments and Reviews**</span>
* Allow users to leave comments and reviews on recipes.

<span style="color: green;">**Recipe Categories and Tags**</span>
* Introduce categories (e.g., Breakfast, Lunch, Dinner) and tags (e.g., Vegan, Gluten-Free) for better recipe organization and searchability.
* Allow users to filter and search recipes based on these categories and tags.

<span style="color: green;">**Shopping List Integration**</span>
* Add functionality for users to create shopping lists based on the ingredients needed for selected recipes.
* Allow users to check off items as they shop.

<span style="color: green;">**Meal Planning and Calendar**</span>
* Implement a meal planning feature that lets users schedule recipes for specific days.
* Integrate with a calendar view to help users plan their meals for the week or month.

<span style="color: green;">**Ingredient Substitutions**</span>
* Provide suggestions for ingredient substitutions to cater to dietary restrictions or preferences.

<span style="color: green;">**Nutritional Information**</span>
* Calculate and display nutritional information for each recipe (e.g., calories, macros, vitamins).
* Allow users to set dietary goals and track their nutritional intake.

<span style="color: green;">**Advanced Search and Filtering**</span>
* Enhance search functionality with advanced filters (e.g., preparation time, difficulty level, cuisine type).
* Implement search by ingredient to find recipes based on what users have on hand.

<span style="color: green;">**Social Sharing and Integration**</span>
* Enable users to share recipes on social media platforms.
* Allow users to follow each other and see what recipes their friends are liking or favoriting.

<span style="color: green;">**Video Tutorials and Step-by-Step Instructions**</span>
* Add video tutorials for recipes to enhance user experience.
* Provide step-by-step cooking instructions with images or short videos.

<span style="color: green;">**Personalized Recommendations**</span>
* Implement a recommendation engine to suggest recipes based on user preferences and past interactions.
* Use machine learning to improve recommendations over time.

<span style="color: green;">**Seasonal and Trending Recipes**</span>
* Highlight seasonal recipes and ingredients.
* Feature trending recipes based on user activity and popular searches.

<span style="color: green;">**User Profile Customization**</span>
* Allow users to customize their profiles with avatars, bios, and preferred cooking styles.
* Display user statistics, such as the number of recipes created, likes received, and favorites.

<span style="color: green;">**Recipe Collaboration**</span>
* Enable collaborative recipe creation, where multiple users can contribute to a single recipe.
* Allow users to share private recipes with friends or family.

<span style="color: green;">**Cooking Challenges and Events**</span>
* Organize cooking challenges or contests with rewards for the best recipes.
* Create event pages for virtual cooking classes or community cooking events.

<span style="color: green;">**Multilingual Support**</span>
* Translate the app into multiple languages to cater to a global audience.
* Include metric and imperial measurement options.

<span style="color: green;">**Offline Access**</span>
* Allow users to save recipes for offline access.
* Ensure essential functionalities work without an internet connection.


## <span style="color: orange;">Contributing</span>

We welcome contributions to **Flavor Saver**! To contribute:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## <span style="color: orange;">License</span>

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## <span style="color: orange;">Contact</span>

For questions, suggestions, or contributions, please contact us at:

- **Email**: support@flavorsaverapp.com
- **GitHub**: [github.com/andrewhamerly/flavor-saver](https://github.com/andrewhamerly/flavor-saver)