// Creation and configuration of the Express APP
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Route configuration
// Ex.
app.use('/api', require('./routes/api.routes'));

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not found'
    });
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json(err);
})

module.exports = app;