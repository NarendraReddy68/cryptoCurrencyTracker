Scenario: Build a Task Management System
You are tasked with creating a basic Task Management System that
allows users to:
1. Create an account (User Management).
2. Log in to access the system (Authentication).
3. Perform CRUD (Create, Read, Update, Delete) operations on
tasks.
4. Filter tasks based on their status (To Do, In Progress,
Completed).
5. Store data in an SQL database.
Requirements:
Frontend (React.js)
1. Signup & Login Page:
◦ Create a form for users to sign up and log in.
◦ Store the authentication token securely (e.g., in
localStorage).

2. Dashboard:
◦ Display a list of tasks fetched from the API.
◦ Provide a form to add a new task.
◦ Allow users to edit or delete tasks.
◦ Add a filter dropdown to filter tasks by status.
Backend (Node.js, Express.js)
1. Authentication:
◦ Use JWT for token-based authentication.
◦ Implement middleware to protect routes.
2. REST API Endpoints:
◦ POST /api/auth/register: Register a new user.
◦ POST /api/auth/login: Authenticate a user and return a
JWT token.
◦ GET /api/tasks: Fetch tasks for the logged-in user.
◦ POST /api/tasks: Create a new task.
◦ PUT /api/tasks/:id: Update an existing task.
◦ DELETE /api/tasks/:id: Delete a task.
3. Error Handling: Handle errors gracefully (e.g., invalid
credentials, unauthorized access).
Database (MySQL or PostgreSQL or SQLite)
• Create two tables:
1. users: To store user data (id, username, password).
2. tasks: To store task data (id, user_id, title,
description, status).

Tech Stack:
• Frontend: React.js, Axios, React Router.
• Backend: Node.js, Express.js.
• Database: SQL (MySQL or PostgreSQL or SQLite).
• Authentication: JWT.

Use of ORM and typescript would be give advantage.
Please GitHUB Public Repo Link for the task.