require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const cronJob = require('./src/jobs/fetchCryptoData');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB().then(() => {
    // Start Background Job once DB is connected
    cronJob.start();
}).catch((err) => {
    console.error('Failed to connect to the database:', err.message);
});

// Middleware
app.use(express.json());
app.use('/api', routes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
