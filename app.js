const mongoose = require('mongoose');
require('dotenv').config();
const assert = require('assert');
const { connectAndListenToMQTT } = require('./reception/reception');
const moment = require('moment');
var client = require('./redis');

let options = {
    useNewUrlParser: true,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD
}

mongoose.connect(process.env.MONGO_URL, options, (err, res) => {
    if (err) throw err;

    console.log('Database connected');

});

client.on('connect', function () {
    console.log('Redis Connected');
});

client.on('error', function (err) {
    console.log('Redis client error: ' + err);
});

connectAndListenToMQTT();