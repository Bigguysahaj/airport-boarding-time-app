
// for finding the port that we are running our backend on
const PORT = 8000
// after installing packages cors, express, dotenv, axios
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

// create a new express app and save it as "app"
const app = express()

app.get('/', (req, res) => {
    res.json('sup')
})
// we will use express package to listen out the changes on the port
app.listen(8000, () => console.log('Backend is running on port ${PORT} '))