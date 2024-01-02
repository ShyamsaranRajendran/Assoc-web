// routes/auth.js
const express = require('express');
const router = express.Router();

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

// Handle login form submission
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform authentication logic here (e.g., check username and password against a database)
  res.send(username);
  // For demonstration purposes, let's assume a successful login and redirect to a dashboard
 // res.redirect('/index');
});

// Logout route
router.get('/logout', (req, res) => {
  // Perform logout logic here (e.g., destroy session)

  // For demonstration purposes, let's redirect to the login page after logout
  res.redirect('/login');
});

module.exports = router;
