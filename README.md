# Microservices Project

This is a microservices-based application consisting of three services: User, Product, and Order. Each service runs on a different port and communicates with each other. The project is containerized using Docker.

## Services

### User Service
- **Port:** 3001
- **Description:** Manages user data.
- **Endpoints:**
  - `POST /users` - Add a new user with name and email.

### Product Service
- **Port:** 3002
- **Description:** Manages product data.
- **Endpoints:**
  - `POST /products` - Add a new product with name and price.

### Order Service
- **Port:** 3000
- **Description:** Manages orders by linking users and products.
- **Endpoints:**
  - `POST /orders` - Create a new order with user name and product name.

## Docker Setup

### Prerequisites
- Docker  should be installed.

### Running the Application
1. Clone the repository:
   ```sh
   git clone https://github.com/FaryalMalik25/microservices-project.git



2.**Navigate to the project directory**
cd microservices-project
3.**Build project** 
docker-compose build 
4.**Start the services using Docker Compose**
docker-compose up


 ## Technologies Used
Docker
Node.js
Express
MongoDB