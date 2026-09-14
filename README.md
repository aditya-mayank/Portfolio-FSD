# Portfolio Web Application (Assignment 3)

**Demo Video**: [Google Drive Link](https://drive.google.com/file/d/1bJ1RQ7zjgTQGbhkTwIHGnxOzUX14e1Fr/view?usp=drive_link)

This project extends the React Portfolio from Assignment 2 by integrating a Node.js/Express backend service for serving project data and handling contact form submissions.

---

## Setup and Running Instructions

You need to run both the backend server and frontend client.

### 1. Backend Server
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   The backend will run at `http://localhost:5000`.

### 2. Frontend Application
1. In a new terminal, navigate to the project root directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## Data Storage Notice

For this assignment, contact form submissions are stored **in-memory** in a JavaScript array (`contactSubmissions` in `server/index.js`). Submissions will reset when the server restarts. No authentication is required for viewing contact submissions via `GET /api/contact`.

---

## API Endpoints

### 1. Health Check
* **GET** `/`
* **Response (200 OK):**
  ```json
  { "status": "ok" }
  ```

### 2. Get All Projects
* **GET** `/api/projects`
* **Response (200 OK):** JSON array of all projects.

### 3. Get Single Project
* **GET** `/api/projects/:id`
* **Response (200 OK):** Matching project object.
* **Error Response (404 Not Found):**
  ```json
  { "error": "Project not found" }
  ```

### 4. Submit Contact Form
* **POST** `/api/contact`
* **Request Body:**
  ```json
  {
    "name": "Aditya Mayank",
    "email": "aditya@example.com",
    "subject": "Inquiry",
    "message": "Hello, I would like to get in touch."
  }
  ```
* **Success Response (201 Created):**
  ```json
  {
    "message": "Message received successfully",
    "submission": { "id": "1726300000000", "name": "Aditya Mayank", "email": "aditya@example.com", "subject": "Inquiry", "message": "Hello...", "createdAt": "2026-09-14T12:00:00.000Z" }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  {
    "errors": {
      "email": "Please enter a valid email address."
    }
  }
  ```

### 5. List All Submissions
* **GET** `/api/contact`
* **Response (200 OK):** JSON array of all contact form submissions.

---

## Testing API Endpoints

You can test the endpoints using either the included Postman collection or `curl` commands.

### Option 1: Postman Collection
Import `postman_collection.json` (located in the root folder) into Postman. It includes pre-configured requests for endpoints B1–B7, including success and failure test cases.

### Option 2: Curl Commands

```bash
# 1. Health Check (B1)
curl -X GET http://localhost:5000/

# 2. Get All Projects (B2)
curl -X GET http://localhost:5000/api/projects

# 3. Get Single Project - Success (B3)
curl -X GET http://localhost:5000/api/projects/ai-quiz-builder

# 4. Get Single Project - Failure (B3)
curl -X GET http://localhost:5000/api/projects/invalid-id-999

# 5. Submit Contact Form - Success (B4)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","subject":"Job Inquiry","message":"I would like to offer you a job."}'

# 6. Submit Contact Form - Failure (B4)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"","email":"invalid-email","message":"short"}'

# 7. List Submissions (B5)
curl -X GET http://localhost:5000/api/contact

# 8. Test 404 Route Handler (B6)
curl -X GET http://localhost:5000/api/does-not-exist
```

---