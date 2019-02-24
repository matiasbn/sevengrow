const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const co2Schema = new Schema({
    clientID: {
        type: Number,
        required: [true, 'required']
    },

    co2: {
        type: Number,
        required: [true, 'required']
    },

    timestamp: {
        type: String,
        required: [true, 'required']
    }

})

module.exports = mongoose.model('Co2', co2Schema);