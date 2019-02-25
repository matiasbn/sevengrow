const express = require('express');
const app = express();

app.use(require('./sensors'));

module.exports = app;