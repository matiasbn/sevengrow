const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const humidifierSchema = new Schema({
    clientID: {
        type: Number,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    timestamp: {
        type: String,
        required: [true, 'required']
    }
})

module.exports = mongoose.model('Humidifier', humidifierSchema);