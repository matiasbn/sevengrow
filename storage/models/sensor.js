const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    clientID: {
        type: Number
    },

    co2: {
        type: Number
    },

    humidity: {
        type: Number
    },

    power: {
        type: Number
    },

    temperature: {
        type: Number
    },

    timestamp: {
        type: String
    }

})

module.exports = mongoose.model('Sensor', sensorSchema);