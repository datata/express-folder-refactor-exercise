const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Get request');
});

app.post('/', (req, res) => {
    return res.send('Post request');
});

app.put('/', (req, res) => {
    return res.send('Put request');
});

app.delete('/', (req, res) => {
    return res.send('Delete request');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log('Error connecting to MongoDB: ', error.message);
    });