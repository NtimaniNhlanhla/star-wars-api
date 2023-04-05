const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();


// Load env files
dotenv.config({ path: './config/config.env'});

// Route Files
const movies = require('./routes/movies')

// Body Parser 
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount Routes
app.use('/api/v1/movies', movies);

module.exports = app;
