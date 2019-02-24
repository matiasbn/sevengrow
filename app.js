require('dotenv').config();
const mongoose = require('mongoose');
const assert = require('assert');
const { connectAndListenToMQTT } = require('./reception/reception');

mongoose.connect(process.env.MONGO_URL, (err, res) => {
    if (err) throw err;
    console.log('Database connected');

    connectAndListenToMQTT();
});