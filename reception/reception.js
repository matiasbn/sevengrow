require('dotenv').config();
const mainTopic = process.env.MAIN_TOPIC;
var mqtt = require('mqtt');
var settings = {
    host: process.env.CLOUD_MQTT_URL,
    port: process.env.CLOUD_MQTT_PORT,
    username: process.env.CLOUD_MQTT_USERNAME,
    password: process.env.CLOUD_MQTT_PASS,
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