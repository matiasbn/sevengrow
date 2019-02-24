const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const controlSchema = new Schema({
    clientID: {
        type: Number,
        required: true
    },

    relay1: {
        type: Number,
        required: true
    },

    relay2: {
        type: Number,
        required: true
    },

    relay3: {
        type: Number,
        required: true
    },

    relay4: {
        type: Number,
        required: true
    },

    timestamp: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Control', controlSchema);