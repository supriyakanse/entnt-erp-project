# Angular CRUD Application

This Angular application provides a simple CRUD (Create, Read, Update, Delete) functionality for managing products and orders.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Services](#services)
- [Routing](#routing)
- [License](#license)

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime (comes with npm)
- [Angular CLI](https://cli.angular.io/) - Command Line Interface for Angular applications

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/supriyakanse/entnt-erp-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-angular-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    ng serve
    ```

2. Open your browser and navigate to [http://localhost:4200/](http://localhost:4200/).

3. Explore the dashboard, product list, and order list pages.

## Components

- **Dashboard Component:** Displays a summary of key metrics, including total products and orders.

- **Product List Component:** Lists all products with details such as ID, name, category, price, and stock quantity. Allows users to view product details and delete products.

- **Order List Component:** Displays a list of orders with details like order ID, customer name, order date, and status. Enables users to view order details.

- **Product Detail Component:** Shows detailed information about a specific product, including the option to update and delete the product.

- **Order Detail Component:** Displays detailed information about a specific order, with the ability to update the order status and delete the order.

- **Product Add Component:** Allows users to add a new product with details such as name, category, price, and stock quantity.

## Services

- **Product Service:** Manages product data, including fetching, adding, updating, and deleting products.

- **Order Service:** Handles order-related functionalities, such as fetching, updating order status, and deleting orders.

## Routing

- The application uses Angular Router for navigation between components.

- Available routes include `/dashboard`, `/products`, `/orders`, `/products/:id` (product detail), `/orders/:id` (order detail), and `/products/new` (add new product).

## License

This project is licensed under the [MIT License](LICENSE).
