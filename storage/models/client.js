const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let clientSchema = new Schema({
    clientID: {
        type: Number
    },
    model: {
        type: String
    }
});


module.exports = mongoose.model('Client', clientSchema);