# Real-Time Collaborative Task Board

A full-stack collaborative task management application where authenticated users can create boards, manage tasks, and collaborate with other board members in real time.

The project is built with **React, Node.js, Express.js, MongoDB, and Socket.IO**.

## Features

### Authentication

* User registration and login
* JWT-based authentication
* Password hashing with bcrypt
* Protected API routes
* Persistent authentication on the frontend

### Boards

* Create a task board
* View boards associated with the logged-in user
* View individual board details
* Rename boards
* Delete boards
* Board-level access control

### Tasks

* Create tasks inside a board
* Edit task title and description
* Assign tasks to board members
* Move tasks between:

  * Todo
  * In Progress
  * Done
* Delete tasks
* Track task creator and timestamps

### Real-Time Collaboration

* Socket.IO-based real-time communication
* Board-specific Socket.IO rooms
* Live task creation, updates, and deletion
* Changes are broadcast to other users viewing the same board
* Activity updates without requiring a page refresh

### Authorization

* Only authenticated users can access protected resources
* Board membership is verified on the backend
* Board owners have additional permissions such as renaming and deleting boards
* Users cannot gain access simply by modifying a board or task ID

### Additional Features

* Activity feed for board changes
* Centralized backend error handling
* Request validation
* Optimistic concurrency protection for task updates
* Responsive task board interface

---

## Tech Stack

| Layer                   | Technology            |
| ----------------------- | --------------------- |
| Frontend                | Next.js, React        |
| Backend                 | Node.js, Express.js   |
| Database                | MongoDB, Mongoose     |
| Authentication          | JWT, bcryptjs         |
| Real-Time Communication | Socket.IO             |
| API Communication       | REST API              |
| Testing                 | Jest, Supertest       |
| Database Testing        | MongoDB Memory Server |

---

## Project Structure

```text
RealTime-Task-Board/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── sockets/
│   ├── tests/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── .env.example
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── lib/
│   └── services/
│
├── .gitignore
├── README.md
└── package.json
```

### Backend Architecture

The backend follows a layered structure:

**Routes → Controllers → Services → Models**

* **Routes** define API endpoints.
* **Controllers** handle HTTP requests and responses.
* **Services** contain business logic and authorization rules.
* **Models** define MongoDB schemas.
* **Middleware** handles authentication, validation, and errors.
* **Sockets** handle real-time board communication.
* **Tests** contain backend API tests.
* **Utils** contain reusable helper functions.

This separation keeps business logic out of routes and prevents controllers from becoming unnecessarily large.

---

## Authentication Flow

```text
User
 │
 ├── Register / Login
 │
 ▼
Backend
 │
 ├── Validate credentials
 ├── Hash / verify password
 └── Generate JWT
 │
 ▼
Frontend
 │
 └── Stores authentication token
 │
 ▼
Protected API Request
 │
 └── Authorization: Bearer <token>
 │
 ▼
Authentication Middleware
 │
 ├── Verify JWT
 └── Attach user information to req.user
 │
 ▼
Controller / Service
```

---

## Authorization Model

Each board maintains a list of members and their roles.

```js
members: [
  {
    user: ObjectId,
    role: "owner" | "member"
  }
]
```

### Owner

The board owner can:

* View the board
* Create and manage tasks
* Rename the board
* Delete the board

### Member

A board member can:

* View the board
* View tasks
* Create tasks
* Update tasks
* Move tasks
* Delete tasks according to the application's authorization rules

Authorization is performed on the backend rather than relying only on frontend UI restrictions.

---

## Real-Time Communication

Socket.IO is used to synchronize changes between users viewing the same board.

Each board has its own Socket.IO room:

```text
board:<boardId>
```

Example events:

```text
board:join
board:leave

task:created
task:updated
task:deleted

activity:created
```

The basic update flow is:

```text
User changes task
       ↓
Frontend sends API request
       ↓
Backend validates request
       ↓
Database is updated
       ↓
Server emits Socket.IO event
       ↓
Other connected board users receive update
       ↓
UI updates without refreshing
```

The database remains the source of truth; Socket.IO is used to distribute changes to connected clients.

---

## Task Concurrency

Task updates use a simple optimistic concurrency mechanism.

Each task maintains a version value.

```text
Client A sees version 3
Client B sees version 3

Client A updates task
        ↓
Server changes version to 4

Client B tries to update using version 3
        ↓
Server detects version mismatch
        ↓
409 Conflict
```

This prevents an older client state from silently overwriting a newer update.

---

## API Overview

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### Boards

```http
POST   /api/boards
GET    /api/boards
GET    /api/boards/:id
PATCH  /api/boards/:id
DELETE /api/boards/:id
```

### Tasks

```http
POST   /api/boards/:id/tasks
PATCH  /api/tasks/:id
DELETE /api/tasks/:id
```

### Activity

```http
GET /api/boards/:id/activity
```

---

## Environment Variables

### Backend

Create:

```text
backend/.env
```

Use `backend/.env.example` as the template.

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/task-board
JWT_SECRET=your_secure_secret
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### Frontend

Create:

```text
frontend/.env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

**Do not commit `.env` or `.env.local` files to Git.**

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/advaitashub/RealTime-Task-Board.git
cd RealTime-Task-Board
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

Configure the backend `.env` file and start the server:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

### 3. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:3000
```

---

## MongoDB

The application uses MongoDB through Mongoose.

You can use either:

* A local MongoDB installation
* MongoDB Atlas

Set the appropriate connection string in:

```env
MONGODB_URI=your_mongodb_connection_string
```

---

The test suite covers areas such as:

* User registration
* User login
* Protected routes
* Board creation
* Board authorization
* Task creation
* Task updates
* Task deletion
* Invalid resource IDs
* Concurrent update conflicts

---

## Error Handling

The backend uses centralized error handling.

Common responses include:

| Status | Meaning                            |
| ------ | ---------------------------------- |
| 400    | Invalid request / validation error |
| 401    | Authentication required            |
| 403    | User is not authorized             |
| 404    | Resource not found                 |
| 409    | Concurrent update conflict         |
| 500    | Internal server error              |

---

## Deployment

For production deployment:

1. Configure production environment variables.
2. Use a production MongoDB database.
3. Keep `JWT_SECRET` outside the source code.
4. Configure the frontend and backend origins correctly.
5. Configure CORS and Socket.IO for the production frontend.
6. Build and deploy the Next.js frontend.
7. Deploy the Express backend separately.

---

## Current Scope

The application currently focuses on:

* Authentication
* Board management
* Task management
* Board authorization
* Real-time task updates
* Activity tracking
* Optimistic concurrency handling

Possible future improvements include:

* Board member invitation system
* More granular member permissions
* Task ordering within columns
* Notifications
* File attachments
* User avatars
* Advanced activity filtering

---

## Author

**Advaita Singh**

B.Tech Computer Science & Engineering

GitHub: `advaitashub`
