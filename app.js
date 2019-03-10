require('dotenv').config();
const mongoose = require('mongoose');
const assert = require('assert');
const { connectAndListenToMQTT } = require('./reception/reception');
const moment = require('moment');
var redis = require('redis');

mongoose.connect(process.env.MONGO_URL, (err, res) => {
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