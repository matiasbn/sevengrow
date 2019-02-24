const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    clientID: {
        type: Number,
        required: [true, 'required']
    },

    co2: {
        type: Number,
        required: [true, 'required']
    },

    humidity: {
        type: Number,
        required: [true, 'required']
    },

    power: {
        type: Number,
        required: [true, 'required']
    },

    temperature: {
        type: Number,
        required: [true, 'required']
    },

    timestamp: {
        type: String,
        required: [true, 'required']
    }

})

module.exports = mongoose.model('Sensor', sensorSchema);