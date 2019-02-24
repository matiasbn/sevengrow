var Client = require('../models/client');

module.exports.clientExists = (_clientID) => {

    return Client.find({ clientID: _clientID }, (err, clientDB) => {
        if (err) {
            console.log('client dont exists: ')
            return false;
        }
        return true;
    })
}
