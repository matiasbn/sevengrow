const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const powerSchema = new Schema({
    clientID: {
        type: Number,
        required: [true, 'required']
    },

    power: {
        type: Number,
        required: [true, 'required']
    },

    timestamp: {
        type: String,
        required: [true, 'required']
    }
})

module.exports = mongoose.model('Power', powerSchema);