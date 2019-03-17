const mongoose = require('mongoose');
require('dotenv').config();
const assert = require('assert');
const { connectAndListenToMQTT } = require('./reception/reception');
const moment = require('moment');
var redis = require('redis');
let auth = {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD
}
mongoose.connect(process.env.MONGO_URL, auth, (err, res) => {
    if (err) throw err;

    console.log('Database connected');

    var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL);

    client.on('connect', function () {
        connectAndListenToMQTT();
        console.log('Redis client connected');
    });

    client.on('error', function (err) {
        console.log('Redis client error: ' + err);
    });
});