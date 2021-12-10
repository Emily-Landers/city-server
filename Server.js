'use strict'

require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
const express = require('express');
const getWeather = require('./weather.js');
const getMovies = require('./movies.js');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001

app.get('/weather', getWeather);
app.get('/movies', getMovies); 

app.listen(PORT, () => console.log(`running on PORT ${PORT}`));