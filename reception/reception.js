require('dotenv').config();
console.log(process.env.MAIN_TOPIC)
const mainTopic = process.env.MAIN_TOPIC;
var mqtt = require('mqtt');
var settings = {
    keepalive: 1000
}

module.exports.connectAndListenToMQTT = () => {

    var client = mqtt.connect(settings);
    var { processToStorage } = require('../storage/storage')

    client.on('connect', function () {
        client.subscribe(mainTopic + '/#');
    });

    client.on('message', function (topic, message) {
        processToStorage(topic, message.toString());
    });
}