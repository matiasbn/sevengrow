const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const controlSchema = new Schema({
    clientID: {
        type: Number
    },

    relay1: {
        type: Number
    },

    relay2: {
        type: Number
    },

    relay3: {
        type: Number
    },

    relay4: {
        type: Number
    },

    timestamp: {
        type: String
    }

})

module.exports = mongoose.model('Control', controlSchema);