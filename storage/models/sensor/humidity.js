const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const humiditySchema = new Schema({
    clientID: {
        type: Number,
        required: [true, 'required']
    },

    humidity: {
        type: Number,
        required: [true, 'required']
    },

    timestamp: {
        type: String,
        required: [true, 'required']
    }
})

module.exports = mongoose.model('Humidity', humiditySchema);