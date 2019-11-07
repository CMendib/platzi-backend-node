const express = require('express');
const app = express();

const { config } = require('./config/index.js');
const moviesApi = require('./routes/movies.js');

moviesApi(app);

app.listen(config, function () {
    console.log(`listenning http://localhost:${config.port}`);
});