// routes/admin-pages.js
const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
  res.render('layouts/admin/admin-page');
});

module.exports = router;
