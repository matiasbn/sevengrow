const Sensor = require('../models/sensor')

module.exports.saveSensor = (_clientID, _payload) => {
    payloadArray = _payload.split(',');
    co2 = parseFloat(payloadArray[0], 10);
    humidity = parseFloat(payloadArray[1], 10);
    power = parseFloat(payloadArray[2], 10);
    temperature = parseFloat(payloadArray[3], 10);

    let sensor = new Sensor({
        clientID: parseInt(_clientID, 10),
        co2,
        humidity,
        power,
        temperature
    })
    sensor.save((err, sensorDB) => {
        if (err) {
            console.log('storage/helpers/saveSensors.js: not successfully saved')
            return false;
        }
        console.log('sensor successfully saved');
    })
}