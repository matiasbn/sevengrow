const Co2 = require('../models/co2')
const Humidity = require('../models/humidity')
const Power = require('../models/power')
const Temperature = require('../models/temperature')

module.exports.saveSensor = (_clientID, _dataType, _payload) => {
    payloadArray = _payload.split(',');
    data = parseFloat(payloadArray[0], 10);
    timestamp = payloadArray[1];
    let sensor;
    switch (_dataType) {
        case 'co2':
            sensor = new Co2({
                clientID: parseInt(_clientID, 10),
                co2: data,
                timestamp
            });
            break;
        case 'humidity':
            sensor = new Humidity({
                clientID: parseInt(_clientID, 10),
                humidity: data,
                timestamp
            });
            break;
        case 'power':
            sensor = new Power({
                clientID: parseInt(_clientID, 10),
                power: data,
                timestamp
            })
            break;
        case 'temperature':
            sensor = new Temperature({
                clientID: parseInt(_clientID, 10),
                temperature: data,
                timestamp
            })
            break;
        default:
            console.log('action not allowed')
    }

    sensor.save((err, sensorDB) => {
        if (err) {
            console.log('storage/helpers/saveSensors.js: not successfully saved')
            return false;
        }
        console.log('sensor successfully saved');
    })
}