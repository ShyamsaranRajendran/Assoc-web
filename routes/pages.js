// routes/pages.js
const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
  res.render('layouts/about-page');
});

module.exports = router;
