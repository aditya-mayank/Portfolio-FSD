# React Personal Portfolio

Hi! This is my Assignment 2 submission for the FSD CS1303 course. I have converted my static HTML/CSS portfolio into a fully functional React single-page application.

## Setup & Run Instructions

To run this project locally on your machine, follow these steps:

1. Make sure you have Node.js installed.
2. Open your terminal and navigate to the project folder.
3. Run `npm install` to install all the required dependencies.
4. Run `npm run dev` to start the development server.
5. Open your browser and go to `http://localhost:5173`.

To build the project for production, just run `npm run build`. It builds without any errors or warnings.

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

I also kept the `projects` data array imported in `App.jsx` and passed it down to `Projects` and `ProjectDetail`. This makes `App` the single source of truth for project data, which will make it much easier to hook up a backend database in Assignment 3.

## My `useEffect` Hooks

I used `useEffect` in several places to handle side effects:

1. **Simulating a Loading Screen (`Home.jsx`)**: I used a `useEffect` with an empty dependency array `[]` so it only runs when the Home component first mounts. Inside, it uses a `setTimeout` to wait 1 second before revealing the page content. I also save a flag in `sessionStorage` so it doesn't annoy the user by loading every single time they click the Home tab. 
2. **Saving Theme Preferences (`App.jsx`)**: I set up an effect that runs whenever `isDark` or `skinColor` changes. It saves the user's choice to `localStorage` and updates the CSS variables on the root document. This way, if you refresh the page, it remembers your colors.
3. **Responsive Mobile Nav (`Navbar.jsx`)**: I added a `window.addEventListener('resize')` to automatically close the mobile sidebar if the user expands their browser window back to desktop size. I made sure to return a cleanup function `removeEventListener` so it doesn't cause memory leaks when navigating.
4. **Typing Animation (`Home.jsx`)**: I created a custom typewriter effect using `setInterval`. The cleanup function `clearInterval` is super important here — without it, React would create a new interval every time the state updated, which caused the typing animation to go crazy and glitch out.

## Technologies Used
- React 19 (Vite)
- React Router DOM v7
- CSS Custom Properties (No Bootstrap/Tailwind)
- FontAwesome Icons
