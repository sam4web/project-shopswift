# Project ShopSwift

ShopSwift is a modern e-commerce platform featuring a responsive frontend and a powerful backend. Built using the **MERN Stack**, ShopSwift provides a seamless shopping experience with user authentication, product browsing, shopping cart functionality, and order management.

## Table of Contents

- [ShopSwift](#shopswift)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend-1)
    - [Backend](#backend-1)
  - [Screenshots](#screenshots)
  - [API Endpoints](#api-endpoints)
    - [Authentication](#authentication)
    - [Users](#users)
    - [Products](#products)
    - [Orders](#orders)
    - [Cart](#cart)
  - [Project Links](#project-links)

## Features

### Frontend

- **User Authentication**: Secure sign-up, login, and logout with session handling.
- **Responsive Design**: Optimized for both desktop and mobile.
- **Product Listings**: Browse and search products with detailed descriptions and prices.
- **Shopping Cart**: Add/remove items and update quantities.
- **Order Management**: Place and track orders.

### Backend

- **Secure Authentication**: Uses **JWT (JSON Web Tokens)** for authentication.
- **Product Management**: Create, update, and delete products.
- **Order Processing**: Handle orders with real-time status updates.
- **Shopping Cart API**: Manage cart items and pricing calculations.
- **Scalability**: Designed to handle large-scale operations efficiently.

## Technologies Used

### Frontend

- **[React.js](https://reactjs.org/)** - Dynamic and interactive UI.
- **[Redux](https://redux.js.org/)** - Global state management.
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first styling.
- **[React Router DOM](https://reactrouter.com/)** - Routing and navigation.

### Backend

- **[Node.js](https://nodejs.org/)** - Server-side JavaScript runtime.
- **[Express.js](https://expressjs.com/)** - Web framework for API handling.
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database for storing data.
- **[Mongoose](https://mongoosejs.com/)** - Schema-based interaction with MongoDB.
- **[JWT (JSON Web Tokens)](https://jwt.io/)** - Authentication mechanism.

## Screenshots

![Home Page](./screenshots/home.png)  
_Homepage showcasing featured products._

![Product Listing Page](./screenshots/products.png)  
_Product listing page displaying available items._

## API Endpoints

### Authentication

- **`POST /api/auth/register`** - Register a new user.
- **`POST /api/auth/login`** - Log in a user.
- **`POST /api/auth/logout`** - Log out the user.
- **`POST /api/auth/refresh`** - Refresh the JWT token.

### Users

- **`GET /api/users/:id`** - Get user details.
- **`GET /api/users/:id/products`** - Get products created by the user.

### Products

- **`GET /api/products`** - Retrieve all products.
- **`GET /api/products/:id`** - Retrieve a specific product.
- **`POST /api/products`** - Add a new product.
- **`PATCH /api/products/:id`** - Update product details.
- **`DELETE /api/products/:id`** - Delete a product.

### Orders

- **`GET /api/orders`** - Retrieve all orders.
- **`POST /api/orders`** - Place a new order.

### Cart

- **`GET /api/cart`** - Retrieve the shopping cart.
- **`POST /api/cart`** - Add items to the cart.
- **`DELETE /api/cart/:id`** - Remove an item from the cart.
- **`GET /api/cart/pricing`** - Get pricing details.

## Project Links

- **Live Application**: [ShopSwift Live](https://projectshopswift.netlify.app/)
- **Live API**: [ShopSwift API](https://shopswift-a9hj.onrender.com)
- **Frontend Code**: [Frontend Repository](https://github.com/sam4web/shopswift/tree/main/frontend)
- **Backend Code**: [Backend Repository](https://github.com/sam4web/shopswift/tree/main/backend)
