const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'project' directory
app.use(express.static(path.join(__dirname, 'project')));

// Route to serve the homepage
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'homepage.html'));
});

// Route to serve the index page
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
