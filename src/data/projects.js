const projects = [
  {
    id: "ai-quiz-builder",
    title: "AI Quiz Builder",
    description: "Real-time multiplayer quiz engine powered by Socket.IO, Gemini AI & MERN stack.",
    longDescription:
      "A full-stack real-time multiplayer assessment platform built with the MERN stack. Features include AI-generated quiz questions via Google Gemini API, live multiplayer rooms using Socket.IO, leaderboard scoring, JWT-based authentication, and a responsive React dashboard. Players join rooms, answer timed questions, and see live score updates.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "Gemini AI", "JWT"],
    image: "/images/portfolio/portfolio-8.png",
    link: "https://github.com/aditya-mayank/AI-Quiz-Builder",
    category: "Full-Stack",
  },
  {
    id: "contestpilot",
    title: "ContestPilot",
    description:
      "CP contest automation agent syncing Codeforces, LeetCode, AtCoder & CodeChef to Google Calendar.",
    longDescription:
      "An automated background scraping agent that fetches upcoming competitive programming contests from Codeforces, LeetCode, AtCoder, and CodeChef APIs, then syncs them directly to the user's Google Calendar via OAuth 2.0. Built with Python, Flask, and the Google Calendar API. Eliminates the need to manually track contest schedules.",
    tech: ["Python", "Flask", "Google Calendar API", "OAuth 2.0", "BeautifulSoup", "REST APIs"],
    image: "/images/portfolio/portfolio-7.png",
    link: "https://github.com/aditya-mayank/ContestPilot",
    category: "Automation",
  },
  {
    id: "backtoowner",
    title: "BackToOwner",
    description:
      "Campus lost & found management system with custom NLP item-matching engine.",
    longDescription:
      "A full-stack MERN application for NIT Warangal's campus lost & found system. Features a custom NLP-based item-matching algorithm that computes similarity scores between lost and found reports using TF-IDF and cosine similarity. Includes user authentication, image uploads via Multer, email notifications, and an admin dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js", "NLP", "Multer", "Nodemailer"],
    image: "/images/portfolio/portfolio-6.png",
    link: "https://github.com/aditya-mayank/BackToOwner",
    category: "Full-Stack",
  },
  {
    id: "sprintz",
    title: "Sprintz",
    description: "Fast-paced 2D platformer game built with Java AWT.",
    longDescription:
      "A custom-built 2D platformer game written in Java using AWT and Swing. Features include procedurally generated levels, enemy AI with pathfinding, sprite animation, collision detection, and a high-score system. All game physics (gravity, jump arcs, friction) are implemented from scratch without any game engine.",
    tech: ["Java", "AWT", "Swing", "OOP", "Game Physics"],
    image: "/images/portfolio/portfolio-5.jpg",
    link: "https://github.com/aditya-mayank/Sprintz/",
    category: "Game Dev",
  },
  {
    id: "melodyy-mitra",
    title: "Melodyy Mitra",
    description: "A college music group website sharing songs and jam sessions.",
    longDescription:
      "Official website for Melodyy Mitra, NIT Warangal's campus music group co-founded by Aditya Mayank. Built with HTML, CSS, and JavaScript, the site features an audio player for original recordings, a photo gallery of performances, event schedule, and member profiles. Fully responsive with a warm, music-themed aesthetic.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/images/portfolio/portfolio-4.jpg",
    link: "https://github.com/aditya-mayank/MelodyyMitra/",
    category: "Frontend",
  },
  {
    id: "java-calculator",
    title: "Calculator (Java)",
    description: "A basic Java calculator for simple arithmetic operations.",
    longDescription:
      "A desktop calculator application built with Java Swing featuring a clean GUI. Supports standard arithmetic operations, keyboard input, memory functions (M+, M-, MR), percentage calculations, and a history log of past calculations. Demonstrates OOP principles including MVC architecture in a desktop context.",
    tech: ["Java", "Swing", "OOP", "MVC"],
    image: "/images/portfolio/portfolio-3.jpg",
    link: "https://github.com/aditya-mayank/",
    category: "Desktop",
  },
  {
    id: "sound-history",
    title: "Sound History",
    description: "A web app showcasing the evolution of music genres.",
    longDescription:
      "An interactive timeline web application tracing the evolution of music genres from the 1920s to the present. Features animated scroll-driven reveals, embedded audio clips, genre relationship graphs, and artist spotlights. Built with vanilla HTML, CSS animations, and JavaScript — no frameworks used.",
    tech: ["HTML5", "CSS3", "JavaScript", "CSS Animations", "Web Audio API"],
    image: "/images/portfolio/portfolio-2.jpg",
    link: "https://github.com/aditya-mayank/Sound__History",
    category: "Frontend",
  },
  {
    id: "central-perk",
    title: "Central Perk",
    description: "A café-themed website with menu, cart, login, and chatbot features.",
    longDescription:
      "Runner-up project at the Noobathon Hackathon at NIT Warangal, built under a 24-hour deadline. A fully functional café web platform inspired by Central Perk from Friends. Features include a dynamic menu with cart system, user authentication, an integrated AI chatbot, and a reservation system. Built with HTML, CSS, JavaScript, and a Node.js backend.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express"],
    image: "/images/portfolio/portfolio-1.jpg",
    link: "https://github.com/aditya-mayank/Dal-velopers",
    category: "Full-Stack",
  },
];

export default projects;
