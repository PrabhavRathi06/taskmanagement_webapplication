# Task Management Web Application

> A simple, full-stack Task Management app built using the MERN stack (MongoDB, Express, React, Node).

## Live Links

- **Frontend (Vercel)**: `https://taskmanagement-webapplication.vercel.app/`
- **Backend API (Render)**: `https://taskmanagement-webapplication.onrender.com`
- **Demo Video**: https://drive.google.com/file/d/1GZS6gtE8RRyaaNVNeszXgPGqUh8vpiOL/view?usp=sharing

---

## Features

- Add, view, edit, and delete tasks
- Mark tasks as completed or active
- Responsive and clean UI using plain CSS
- Toast notifications for success/error messages
- Form validations so empty tasks cannot be saved
- Backend REST API built with Node and Express

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Backend API** | Node.js, Express |
| **Database** | MongoDB, Mongoose |
| **Frontend UI** | React, Vite |
| **Styling** | Plain CSS |
| **Notifications** | react-hot-toast |
| **Icons** | lucide-react |

---

## Project Structure

```text
taskmanagement_webapplication/
├── backend/
│   ├── server.js               # Express application & entry point
│   ├── models/
│   │   └── Task.js             # Mongoose database model
│   ├── controllers/
│   │   └── taskController.js   # API route logic and database interactions
│   ├── routes/
│   │   └── taskRoutes.js       # Express route definitions
│   └── .env.example            # Environment variable template
└── frontend/
    ├── src/
    │   ├── App.jsx             # Main application component
    │   ├── api.js              # Axios HTTP client configuration
    │   ├── index.css           # Custom design system and styling
    │   ├── main.jsx            # React rendering entry point
    │   └── components/         # Reusable UI components
    │       ├── TaskForm.jsx    
    │       ├── TaskItem.jsx    
    │       └── TaskList.jsx    
    └── vite.config.js          # Vite build configuration
```

---

## Local Setup Instructions

### Prerequisites
- Node.js 18+
- MongoDB (Local installation or MongoDB Atlas URI)

### 1. Database Configuration
Ensure your MongoDB service is running locally, or have your MongoDB Atlas connection string ready.

### 2. Backend Setup
```bash
cd backend

# Install required dependencies
npm install

# Configure your environment variables
# Create a .env file and insert your MONGO_URI and PORT
# Example:
# PORT=5000
# MONGO_URI=mongodb://127.0.0.1:27017/taskmanagement

# Launch the Node.js server
node server.js
```
> **Backend API:** `http://localhost:5000`

### 3. Frontend Setup
Open a **new terminal tab**:
```bash
cd frontend

# Install required dependencies
npm install

# Start the development server
npm run dev
```
> **Frontend App:** `http://localhost:5173`

---

## Core API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/tasks` | Get all tasks from the database |
| `POST` | `/api/tasks` | Create a new task |
| `PUT`  | `/api/tasks/:id` | Update a task (edit text or mark completed) |
| `DELETE`| `/api/tasks/:id` | Delete a task |

---

## Assumptions & Additional Features

- **Styling Choice**: I used plain CSS instead of a framework like Tailwind to show strong fundamental CSS skills.
- **Component Structure**: I broke the UI down into small, reusable React components (`TaskForm`, `TaskList`, `TaskItem`) to keep the code clean and easy to maintain.
- **Validations**: I added basic form validation on both the frontend and backend (Mongoose schema) to make sure users can't save tasks without titles.

---
*Developed by Prabhav Rathi.*
