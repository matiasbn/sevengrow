const Extractor = require('../models/control/extractor')
const Humidifier = require('../models/control/humidifier')
var redis = require('redis');

module.exports.saveControl = (_clientID, _dataType, _payload) => {

    let control;
    let validTopic = true;
    let timestamp = new Date();

    switch (_dataType) {
        case 'extractor':
            control = new Extractor({
                clientID: parseInt(_clientID, 10),
                state: _payload,
                timestamp: timestamp,
                year: timestamp.getFullYear(),
                month: timestamp.getMonth(),
                day: timestamp.getDate(),
                hour: timestamp.getHours(),
                minute: timestamp.getMinutes(),
                second: timestamp.getSeconds(),
            });
            break;

        case 'humidifier':
            control = new Humidifier({
                clientID: parseInt(_clientID, 10),
                state: _payload,
                timestamp: timestamp,
                year: timestamp.getFullYear(),
                month: timestamp.getMonth(),
                day: timestamp.getDate(),
                hour: timestamp.getHours(),
                minute: timestamp.getMinutes(),
                second: timestamp.getSeconds(),
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

        var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL);

        client.on('connect', function () {
            let lastData = 'last-' + _dataType;
            client.set(lastData, _payload);
        });

        client.on('error', function (err) {
            console.log('Redis client error: ' + err);
        });

    }

}