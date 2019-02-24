const Control = require('../models/control')

module.exports.saveControl = (_clientID, _payload) => {
    payloadArray = _payload.split(',');
    relay1 = parseInt(payloadArray[0], 10);
    relay2 = parseInt(payloadArray[1], 10);
    relay3 = parseInt(payloadArray[2], 10);
    relay4 = parseInt(payloadArray[3], 10);
    timestamp = payloadArray[4];

    let control = new Control({
        clientID: parseInt(_clientID, 10),
        relay1,
        relay2,
        relay3,
        relay4,
        timestamp
    })
    control.save((err, sensorDB) => {
        if (err) {
            console.log('storage/helpers/saveControl.js: not successfully saved')
            return false;
        }
        console.log('control successfully saved');
    })
}