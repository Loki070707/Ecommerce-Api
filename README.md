# Ecommerce API

This project aims to create a REST API for an eCommerce application using Node.js, Express, and MongoDB. The API will support the four basic CRUD operations: GET, POST, PUT, and DELETE.

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- Node.js
- MongoDB

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory.

```
cd API
```

3. Install the project dependencies using npm.

```
npm install
```

## Project Setup

1. Connect to MongoDB Atlas or set up a local MongoDB database.
2. Update the MongoDB connection URL in the project configuration.
3. Make sure the MongoDB server is running.

## Usage

1. Start the server using the following command:

```
npm start
```

2. The server will start running on `http://localhost:8000`.

## API Endpoints

The API provides the following endpoints:

- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a specific product by ID.
- `POST /api/products`: Add a new product.
- `PUT /api/products/:id`: Update a product.
- `DELETE /api/products/:id`: Delete a product.

## Testing

You can use Postman or any other API testing tool to test the endpoints. Perform the respective HTTP requests (GET, POST, PUT, DELETE) to the provided endpoints to interact with the API.

## Technologies Used

- Node.js
- Express
- MongoDB

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).