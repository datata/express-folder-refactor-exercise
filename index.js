const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;

// User Routes
app.get('/users', (req, res) => {
    return res.send('Get request');
});

app.post('/users', (req, res) => {
    return res.send('Post request');
});

app.put('/users/:id', (req, res) => {
    return res.send('Put request');
});

app.delete('/users/:id', (req, res) => {
    return res.send('Delete request');
});

// Product Routes
app.get('/products', (req, res) => {
    return res.send('Get products request');
});

app.post('/products', (req, res) => {
    return res.send('Post products request');
});

app.put('/products/:id', (req, res) => {
    return res.send('Put products request');
});

app.delete('/products/:id', (req, res) => {
    return res.send('Delete products request');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log('Error connecting to MongoDB: ', error.message);
    });