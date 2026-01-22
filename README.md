# E-Commerce Store (React – Express – MongoDB)

## Introduction to Technologies

This project is built using a **modern MERN stack** to create a full web application with a clear separation between frontend and backend.

**React** is used on the frontend to build interactive user interfaces. It allows us to create reusable components, manage application state, and handle navigation between pages using `react-router-dom`. React helps keep the UI dynamic and responsive without reloading the page.

**Express.js** is used on the backend as a lightweight framework on top of Node.js. It helps define API routes, handle HTTP requests (GET, POST, PUT, DELETE), apply middleware, and organize backend logic in controllers.

**MongoDB** is the database used to store application data such as users, products, and orders. With **Mongoose**, schemas and models are defined to structure and validate the data before saving it to the database.

Other important tools include:
- **JWT** for authentication and user verification
- **bcrypt** for password encryption
- **Axios** for frontend-backend communication
- **Git & GitHub** for version control

---

## About the Project

The **E-commerce Store** project is a full-stack web application that simulates an online store.  
It allows users to register, log in, browse products, and place orders, while providing a backend API to manage products, users, and orders.

The project is designed to follow real-world best practices:
- Clear separation between frontend and backend
- RESTful API design
- Secure user authentication
- Scalable and maintainable code structure

---

## What We Did Step by Step

**1. Project Initialization**  
We created a single repository containing two main parts: a React frontend and an Express backend.  
Each part has its own `package.json` and dependencies installed using npm.

**2. Frontend Development**  
We built the user interface using React functional components.  
Pages such as Home, Products, Cart, Signup, and Login were created and connected using React Router.  
Forms were connected to React state using `useState` and validated using basic HTML5 validation.

**3. Backend Setup**  
An Express server was created and configured with middleware such as `express.json()` and `cors()`.  
The backend was organized into models, controllers, and routes to follow clean architecture principles.

**4. Database Integration**  
MongoDB was connected using Mongoose.  
Schemas and models were created for:
- Users
- Products
- Orders  

This ensures consistent data storage and validation.

**5. API Development (CRUD)**  
REST APIs were implemented for:
- Products (create, read)
- Orders (create)
- Users (signup and login)

Controllers handle the logic, while routes only define endpoints.

**6. Frontend ↔ Backend Integration**  
Axios was used in React to send HTTP requests to the backend APIs.  
Responses from the server are handled to display success messages, errors, and dynamic data on the UI.

**7. Authentication & Security (Basic)**  
User authentication was implemented using:
- Password hashing with bcrypt
- JWT tokens on login
- Protected routes using middleware
- User roles (Admin / User) for permission control

**8. Testing & Debugging**  
APIs were tested using Postman.  
Frontend behavior was tested directly in the browser with valid and invalid data to ensure stability.

---

## How to Install and Run the Project

**1. Clone the repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
