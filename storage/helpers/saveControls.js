const Extractor = require('../models/control/extractor')
const Humidifier = require('../models/control/humidifier')
const client = require('../../redis')

module.exports.saveControl = (_clientID, _dataType, _payload) => {

    let control;
    let validTopic = true;
    let timestamp = Math.floor(new Date().getTime() / 1000);

    switch (_dataType) {
        case 'extractor':
            control = new Extractor({
                clientID: parseInt(_clientID, 10),
                state: _payload,
                timestamp: timestamp
            });
            break;

        case 'humidifier':
            control = new Humidifier({
                clientID: parseInt(_clientID, 10),
                state: _payload,
                timestamp: timestamp
            });
            break;

        default:
            console.log('action not allowed: ' + _dataType);
            validTopic = false;
    }
    if (validTopic && (_payload === "on" || _payload === "off")) {
        control.save((err, controlDB) => {
            if (err) {
                console.log('storage/helpers/saveControl.js: not successfully saved')
                return false;
            }
            console.log('control successfully saved');
        })

        let lastData = _clientID + '-last-' + _dataType;
        client.set(lastData, _payload);

    }

}