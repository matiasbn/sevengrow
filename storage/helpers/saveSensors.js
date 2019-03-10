
const Co2 = require('../models/sensor/co2')
const Humidity = require('../models/sensor/humidity')
const Power = require('../models/sensor/power')
const Temperature = require('../models/sensor/temperature')
var redis = require('redis');

// getFullYear()	Get the year as a four digit number(yyyy)
// getMonth()	Get the month as a number(0 - 11)
// getDate()	Get the day as a number(1 - 31)
// getHours()	Get the hour(0 - 23)
// getMinutes()	Get the minute(0 - 59)
// getSeconds()	Get the second(0 - 59)
// getMilliseconds()	Get the millisecond(0 - 999)
// getTime()	Get the time(milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number(0 - 6)

module.exports.saveSensor = (_clientID, _dataType, _payload) => {
    payloadArray = _payload.split(',');
    data = parseFloat(payloadArray[0], 10);
    timestamp = new Date(parseInt(payloadArray[1]) * 1000);
    let sensor;
    let validTopic = true;
    switch (_dataType) {
        case 'co2':
            sensor = new Co2({
                clientID: parseInt(_clientID, 10),
                co2: data,
                timestamp,
                year: timestamp.getFullYear(),
                month: timestamp.getMonth(),
                day: timestamp.getDate(),
                hour: timestamp.getHours(),
                minute: timestamp.getMinutes(),
                second: timestamp.getSeconds(),
            });
            break;
        case 'humidity':
            sensor = new Humidity({
                clientID: parseInt(_clientID, 10),
                humidity: data,
                timestamp,
                year: timestamp.getFullYear(),
                month: timestamp.getMonth(),
                day: timestamp.getDate(),
                hour: timestamp.getHours(),
                minute: timestamp.getMinutes(),
                second: timestamp.getSeconds(),
            });
            break;
        case 'power':
            sensor = new Power({
                clientID: parseInt(_clientID, 10),
                power: data,
                timestamp,
                year: timestamp.getFullYear(),
                month: timestamp.getMonth(),
                day: timestamp.getDate(),
                hour: timestamp.getHours(),
                minute: timestamp.getMinutes(),
                second: timestamp.getSeconds(),
            })
            break;
        case 'temperature':
            sensor = new Temperature({
                clientID: parseInt(_clientID, 10),
                temperature: data,
                timestamp,
                year: timestamp.getFullYear(),
                month: timestamp.getMonth(),
                day: timestamp.getDate(),
                hour: timestamp.getHours(),
                minute: timestamp.getMinutes(),
                second: timestamp.getSeconds(),
            })
            break;
        default:
            console.log('action not allowed');
            console.log(_dataType);
            validTopic = false;
    }
    if (validTopic) {
        sensor.save((err, sensorDB) => {
            if (err) {
                console.log('storage/helpers/saveSensors.js: not successfully saved')
                return false;
            }
            console.log('sensor successfully saved');
        });

        var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL);

        client.on('connect', function () {
            let lastData = 'last-' + _dataType;
            client.set(lastData, data);
        });

        client.on('error', function (err) {
            console.log('Redis client error: ' + err);
        });

    }

}