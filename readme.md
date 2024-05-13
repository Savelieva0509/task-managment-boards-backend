# Task Management Backend

This is a backend server for managing tasks and boards. It provides API endpoints for creating, updating, deleting tasks and boards.

## Getting Started

To get started with the backend server, follow these instructions:

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB, Compass

### Installation

1. Clone this repository to your local machine.
2. Install dependencies using npm install.
3. Create a `.env` file in the root directory and provide the following environment variables (PORT, DB_HOST)
4. To start the backend server, run the following command:
- `npm start` &mdash; server start in production mode
- `npm run start:dev` &mdash; server start in development mode

The server will start running on port 3001 by default. You can change the port by modifying the `PORT` variable in the `.env` file.

### API Endpoints

BASE_URL: https:// https://task-managment-boards-backend.onrender.com
BASE LINK: mongodb+srv://savelieva0509:W5SEVhhJ3axtppS9@cluster0.rhhmecl.mongodb.net/boards_reader?retryWrites=true&w=majority&appName=Cluster0

The following API endpoints are available:

- `GET /api/boards`: Get all boards
- `POST /api/boards`: Create a new board
- `GET /api/boards/:boardId`: Get a specific board by ID
- `PUT /api/boards/:boardId`: Update a board by ID
- `DELETE /api/boards/:boardId`: Delete a board by ID

- `GET /api/boards/:boardId/tasks`: Get all tasks for a specific board
- `POST /api/boards/:boardId/tasks`: Create a new task for a specific board
- `PUT /api/boards/:boardId/tasks/:taskId`: Update a task by ID for a specific board
- `DELETE /api/boards/:boardId/tasks/:taskId`: Delete a task by ID for a specific board
- `PATCH /api/boards/:boardId/tasks/:taskId`: Update task status by ID for a specific board
