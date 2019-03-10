const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const temperatureSchema = new Schema({
    clientID: {
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
    },

    year: {
        type: String,
        required: [true, 'required']
    },

    month: {
        type: String,
        required: [true, 'required']
    },

    day: {
        type: String,
        required: [true, 'required']
    },

    hour: {
        type: String,
        required: [true, 'required']
    },

    minute: {
        type: String,
        required: [true, 'required']
    },

    second: {
        type: String,
        required: [true, 'required']
    }

})

module.exports = mongoose.model('Temperature', temperatureSchema);