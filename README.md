# Flavor Saver

Appreciating, recognizing, and organizing recipes is one of the pleasures of life.

An app that allows for food flavor lovers to discover new recipes, save their favorites for reference, and share their special recipes with others will help foster a supportive food community.

Welcome to **Flavor Saver**, your go-to recipe database app designed to help you save, share, and explore delicious recipes with ease.

## Table of Contents

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

## Introduction

**Flavor Saver** is a web application where users can create, store, and manage their favorite recipes. Users can also browse recipes created by others, save them to their favorites, and even like recipes they find appealing. The application ensures that users with dietary restrictions can filter recipes based on allergens.

Website: [www.flavorsaverapp.com](http://www.flavorsaverapp.com)

## Features

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

## Technologies Used (Needs Review)

![JavaScript](https://img.shields.io/badge/JavaScript-blue) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Express.js](https://img.shields.io/badge/Express.js-blue) ![MySQL](https://img.shields.io/badge/MySQL-blue) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

- **Backend**: Node.js, Express, Sequelize, PostgreSQL
- **Frontend**: React, Redux, HTML, CSS
- **Authentication**: JWT, bcrypt
- **Hosting**: Heroku, Netlify
- **Others**: Multer (for image uploads), Cloudinary (for image storage)

## Installation (Needs Review)

Steps to kickstart the project:<br />1. **Copy Link**: Hit the "Code" button in this GitHub repo to copy the link.<br />2. **Clone**: In GitBash, execute the command `git clone [paste link here]`.<br />3. **NPM**: Install Node Package Manager with `npm init -y`.<br />4. **Inquirer**: Get npm's inquirer package by running `npm install inquirer`.<br />5. **PG**: Get npm's pg package by running `npm install pg`.<br />6. **PostgreSQL**: Setup PostgreSQL database by running `psql -U postgres` followed by entering your user database password and then creating the database by running `\i db/schema.sql`.<br />7. **Seeding**: Optionally, you can seed the database with info by running `\i db/seeds.sql`.

## Usage

Once the server is running, you can access the application at `http://localhost:3001`.

- **Sign up or log in** to create a new account.
- **Create new recipes** by filling in the title, description, ingredients, instructions, and uploading an image.
- **Browse recipes** and use the search functionality to find recipes based on keywords or allergens.
- **Save recipes** to your favorites and **like recipes** to show appreciation.

## Models

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

## API Endpoints

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

## Future Enhancements (Needs Review)

We have several ideas for future enhancements to make **Flavor Saver** even better:

- **Advanced Search**: Implement advanced search functionality with filters for ingredients, cooking time, and dietary preferences.
- **Recipe Rating System**: Allow users to rate recipes and see average ratings.
- **Comments and Reviews**: Enable users to leave comments and reviews on recipes.
- **Shopping List**: Add a feature that allows users to generate a shopping list from selected recipes.
- **Meal Planner**: Create a meal planning tool to help users organize their meals for the week.
- **Notifications**: Implement notifications for new recipes, likes, and comments.
- **Social Sharing**: Add social media sharing options for recipes.
- **Mobile App**: Develop a mobile version of the app for iOS and Android.

## Contributing

We welcome contributions to **Flavor Saver**! To contribute:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, suggestions, or contributions, please contact us at:

- **Email**: support@flavorsaverapp.com
- **GitHub**: [github.com/andrewhamerly/flavor-saver](https://github.com/andrewhamerly/flavor-saver)