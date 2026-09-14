import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projects from './data/projects.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// In-memory array for contact submissions
const contactSubmissions = [];

// Validation helper for email
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// B1: Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// B2: Serve Project List
app.get('/api/projects', (req, res) => {
  res.status(200).json(projects);
});

// B3: Serve a Single Project
app.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.status(200).json(project);
});

// B4: Handle Contact Form Submissions
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  const errors = {};

  if (!name || !name.trim()) {
    errors.name = 'Full name is required.';
  }
  
  if (!email || !email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message || !message.trim()) {
    errors.message = 'Message is required.';
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  const newSubmission = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim(),
    subject: subject ? subject.trim() : '',
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  contactSubmissions.push(newSubmission);
  res.status(201).json({ message: 'Message received successfully', submission: newSubmission });
});

// B5: List Submissions (for verification)
app.get('/api/contact', (req, res) => {
  res.status(200).json(contactSubmissions);
});

// B6: Centralized Error Handling - 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

// B6: Centralized Error Handling - Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
