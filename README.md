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
- [API Endpoints](#api-endpoints)
- [Future Developments](#future-developments)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

**Flavor Saver** is a web application where users can create, store, and manage their favorite recipes. Users can also browse recipes created by others, save them to their favorites, and even like recipes they find appealing. The application ensures that users with dietary restrictions can filter recipes based on allergens.

Deployed Application: [flavor-saver.onrender.com/](flavor-saver.onrender.com/)
Coming Soon - Website: [www.flavorsaverapp.com](http://www.flavorsaverapp.com)

## Features

- User Authentication
  - Sign up, log in, log out
  - Password encryption

- Recipe Management
  - Create, read, update, and delete recipes
  - Add ingredients with quantities and units
  - Upload and display recipe images
  - Include detailed instructions and descriptions

- Allergens Management - Coming Soon
  - Tag recipes with allergens
  - Filter recipes by allergens

- User Interactions - Coming Soon
  - Like and favorite recipes
  - View most liked and most favorited recipes

## Technologies Used

![JavaScript](https://img.shields.io/badge/JavaScript-blue) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Express.js](https://img.shields.io/badge/Express.js-blue) ![MySQL](https://img.shields.io/badge/MySQL-blue) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

- **Backend**: Node.js, Express, Handlebars.js, Sequelize, PostgreSQL
- **Frontend**: HTML, Tailwind CSS, JavaScript, Fetch API
- **Authentication**: bcrypt, dotenv
- **Hosting**: Render
- **Others**: Git, GitHub, Insomnia

## Installation

Steps to kickstart the project:<br />1. **Copy Link**: Hit the "Code" button in this GitHub repo to copy the link.<br />2. **Clone**: In GitBash, execute the command `git clone [paste link here]`.<br />3. **NPM**: Install Node Package Manager with `npm init -y`.<br />4. **Download npm package dependencies**: Get npm's packages by running `npm install`.<br />5. **PostgreSQL**: Setup PostgreSQL database by running `psql -U postgres` followed by entering your user database password and then creating the database by running `\i db/schema.sql`.<br />6. **Seeding**: Optionally, you can seed the database with info by running `npm run seed`.<br />7. **Run Server**: Now that your server has the seeded data and packages installed run `npm start`.<br />8. **Click on LocalHost URL Link**: Enjoy the Flavor Saver app.

## Usage

Once the server is running, you can access the application at `http://localhost:3001`.

- **Sign up or log in** to create a new account.
- **Create new recipes** by filling in the title, description, ingredients, instructions, and uploading an image.
- **Browse recipes** and use the filter functionality to find recipes based on keywords or allergens.
- **Save recipes** to your favorites and **like recipes** to show appreciation.

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

### Ingredients - Coming Soon
- `GET /recipes/:recipeId/ingredients` - Get all ingredients for a recipe
- `POST /recipes/:recipeId/ingredients` - Add an ingredient to a recipe
- `PUT /ingredients/:id` - Update an ingredient
- `DELETE /ingredients/:id` - Delete an ingredient

### Allergens - Coming Soon
- `GET /allergens` - Get all allergens
- `POST /allergens` - Create a new allergen
- `PUT /allergens/:id` - Update an allergen
- `DELETE /allergens/:id` - Delete an allergen

### Favorites - Coming Soon
- `POST /favorites` - Add a recipe to favorites
- `DELETE /favorites/:id` - Remove a recipe from favorites

### Likes - Coming Soon
- `POST /likes` - Like a recipe
- `DELETE /likes/:id` - Unlike a recipe

## Future Developments

We have several ideas for future enhancements to make **Flavor Saver** even better:

**User Comments and Reviews**
* Allow users to leave comments and reviews on recipes.

**Recipe Categories and Tags**
* Introduce categories (e.g., Breakfast, Lunch, Dinner) and tags (e.g., Vegan, Gluten-Free) for better recipe organization and searchability.
* Allow users to filter and search recipes based on these categories and tags.

**Shopping List Integration**
* Add functionality for users to create shopping lists based on the ingredients needed for selected recipes.
* Allow users to check off items as they shop.

**Meal Planning and Calendar**
* Implement a meal planning feature that lets users schedule recipes for specific days.
* Integrate with a calendar view to help users plan their meals for the week or month.

**Ingredient Substitutions**
* Provide suggestions for ingredient substitutions to cater to dietary restrictions or preferences.

**Nutritional Information**
* Calculate and display nutritional information for each recipe (e.g., calories, macros, vitamins).
* Allow users to set dietary goals and track their nutritional intake.

**Advanced Search and Filtering**
* Enhance search functionality with advanced filters (e.g., preparation time, difficulty level, cuisine type).
* Implement search by ingredient to find recipes based on what users have on hand.

**Social Sharing and Integration**
* Enable users to share recipes on social media platforms.
* Allow users to follow each other and see what recipes their friends are liking or favoriting.

**Video Tutorials and Step-by-Step Instructions**
* Add video tutorials for recipes to enhance user experience.
* Provide step-by-step cooking instructions with images or short videos.

**Personalized Recommendations**
* Implement a recommendation engine to suggest recipes based on user preferences and past interactions.
* Use machine learning to improve recommendations over time.

**Seasonal and Trending Recipes**
* Highlight seasonal recipes and ingredients.
* Feature trending recipes based on user activity and popular searches.

**User Profile Customization**
* Allow users to customize their profiles with avatars, bios, and preferred cooking styles.
* Display user statistics, such as the number of recipes created, likes received, and favorites.

**Recipe Collaboration**
* Enable collaborative recipe creation, where multiple users can contribute to a single recipe.
* Allow users to share private recipes with friends or family.

**Cooking Challenges and Events**
* Organize cooking challenges or contests with rewards for the best recipes.
* Create event pages for virtual cooking classes or community cooking events.

**Multilingual Support**
* Translate the app into multiple languages to cater to a global audience.
* Include metric and imperial measurement options.

**Offline Access**
* Allow users to save recipes for offline access.
* Ensure essential functionalities work without an internet connection.


## Contributing

We welcome contributions to **Flavor Saver**! To contribute:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

This app was made by the contributions of Chris Lose, Tim Watson, Avery Gallagan, and Andrew Hamerly.

## Contact

For questions, suggestions, or contributions, please contact us at:

- **Email**: support@flavorsaverapp.com
- **GitHub**: [github.com/andrewhamerly/flavor-saver](https://github.com/andrewhamerly/flavor-saver)
