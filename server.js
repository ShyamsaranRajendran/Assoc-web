const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3000;

// Database configuration
const databaseConfig = require('./config/database');

// Connect to the database
mongoose.connect(`mongodb://${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.database}`);
// Set the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// Set up routes
const indexRoutes = require('./routes/index');
const pagesRoutes = require('./routes/pages');
const adminRoutes = require('./routes/admin-pages');
const authRoutes = require('./routes/auth');

// Pass the __dirname variable to the templates
app.use((req, res, next) => {
  res.locals.basePath = __dirname;
  next();
});


app.use('/', indexRoutes);
app.use('/pages', pagesRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
