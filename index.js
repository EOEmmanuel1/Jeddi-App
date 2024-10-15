const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const infoRoutes = require('./routes/infoRoutes');

// Use routes
app.use('/information', infoRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
});