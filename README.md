Google Drive Video Link:
https://drive.google.com/file/d/1kqbHAwCKbOif4k-Equ7NuK7sGc4_t6bn/view?usp=drive_link

# React Personal Portfolio

Hi! This is my Assignment 3 submission for the FSD CS1303 course. I have converted my static HTML/CSS portfolio into a fully functional React single-page application with a Node.js/Express backend.

## Setup & Run Instructions

This repository contains both the React frontend and the Express backend. You will need two terminal windows to run them simultaneously.

### 1. Backend (Express Server)
1. Open a terminal and navigate to the `server` folder: `cd server`
2. Run `npm install` to install backend dependencies.
3. Create a `.env` file based on `.env.example`.
4. Run `npm run dev` to start the backend server (runs on `http://localhost:5000` by default).

### 2. Frontend (React App)
1. Open a new terminal and navigate to the project root folder.
2. Run `npm install` to install frontend dependencies.
3. Run `npm run dev` to start the Vite development server.
4. Open your browser and go to `http://localhost:5173`.

## API Documentation

The backend exposes the following endpoints. The data storage for contact submissions is an **in-memory array**, meaning submissions will be cleared if the server restarts.

### 1. Health Check
- **Endpoint**: `GET /`
- **Response**: `200 OK`
  ```json
  { "status": "ok" }
  ```

### 2. Get All Projects
- **Endpoint**: `GET /api/projects`
- **Response**: `200 OK` (Returns an array of project objects)

### 3. Get Single Project
- **Endpoint**: `GET /api/projects/:id`
- **Success Response**: `200 OK` (Returns matching project object)
- **Error Response**: `404 Not Found`
  ```json
  { "error": "Project not found" }
  ```

### 4. Submit Contact Form
- **Endpoint**: `POST /api/contact`
- **Body**: `{ "name": "John Doe", "email": "john@example.com", "subject": "Hello", "message": "This is a test message." }`
- **Success Response**: `201 Created`
  ```json
  { 
    "message": "Message received successfully", 
    "submission": { "id": "12345", "name": "John Doe", ... } 
  }
  ```
- **Error Response**: `400 Bad Request`
  ```json
  { 
    "errors": { "email": "Please enter a valid email address." } 
  }
  ```

### 5. List Submissions
- **Endpoint**: `GET /api/contact`
- **Response**: `200 OK` (Returns array of all contact submissions)

## Curl Commands for Testing

```bash
# 1. Health Check
curl -X GET http://localhost:5000/

# 2. Get All Projects
curl -X GET http://localhost:5000/api/projects

# 3. Get Single Project (Success)
curl -X GET http://localhost:5000/api/projects/ai-quiz-builder

# 4. Get Single Project (Failure - 404)
curl -X GET http://localhost:5000/api/projects/does-not-exist

# 5. Submit Contact Form (Success)
curl -X POST http://localhost:5000/api/contact \
-H "Content-Type: application/json" \
-d '{"name":"Alice","email":"alice@example.com","subject":"Job Inquiry","message":"I would like to offer you a job."}'

# 6. Submit Contact Form (Failure - Validation Error 400)
curl -X POST http://localhost:5000/api/contact \
-H "Content-Type: application/json" \
-d '{"name":"","email":"invalid-email","message":"short"}'

# 7. List Submissions
curl -X GET http://localhost:5000/api/contact

# 8. Test 404 Route handler
curl -X GET http://localhost:5000/api/does-not-exist
```

## Component Tree & State-Lifting

Here is a quick overview of how my components are structured:

```
App
├── Navbar
│   ├── ThemeToggle
│   └── StyleSwitcher
├── Routes
│   ├── Home
│   ├── About (renders SkillBars)
│   ├── Projects (renders ProjectCards and TechBadges)
│   ├── ProjectDetail 
│   ├── Contact (renders ContactForm)
│   └── NotFound
```

**State-Lifting Decisions:**
I lifted the theme state (`isDark`) and the color state (`skinColor`) all the way up to the `App` component. I did this because the theme needs to affect the entire application — the `Navbar` needs to know about it to show the correct toggle icon, and I need to apply a `.dark` class to the `document.body` so the global CSS variables change. Since `App` is the parent of everything, it was the best place to keep this state and pass it down as props.

## My `useEffect` Hooks

I used `useEffect` in several places to handle side effects:

1. **Simulating a Loading Screen (`Home.jsx`)**: I used a `useEffect` with an empty dependency array `[]` so it only runs when the Home component first mounts. Inside, it uses a `setTimeout` to wait 1 second before revealing the page content. I also save a flag in `sessionStorage` so it doesn't annoy the user by loading every single time they click the Home tab. 
2. **Saving Theme Preferences (`App.jsx`)**: I set up an effect that runs whenever `isDark` or `skinColor` changes. It saves the user's choice to `localStorage` and updates the CSS variables on the root document. This way, if you refresh the page, it remembers your colors.
3. **Responsive Mobile Nav (`Navbar.jsx`)**: I added a `window.addEventListener('resize')` to automatically close the mobile sidebar if the user expands their browser window back to desktop size. I made sure to return a cleanup function `removeEventListener` so it doesn't cause memory leaks when navigating.
4. **Typing Animation (`Home.jsx`)**: I created a custom typewriter effect using `setInterval`. The cleanup function `clearInterval` is super important here — without it, React would create a new interval every time the state updated, which caused the typing animation to go crazy and glitch out.
5. **Data Fetching (`Projects.jsx` & `ProjectDetail.jsx`)**: Using `fetch` to retrieve project data from the backend API, maintaining loading and error states to improve UX.

## Technologies Used
- React 19 (Vite)
- Node.js & Express
- React Router DOM v7
- CSS Custom Properties (No Bootstrap/Tailwind)
- FontAwesome Icons
