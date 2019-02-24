const mainTopic = 'sevengrow'
var mqtt = require('mqtt');
var settings = {
    keepalive: 1000
}
var client = mqtt.connect(settings);

client.on('connect', function () {
    client.subscribe(mainTopic);
});

client.on('message', function (topic, message) {
    console.log(topic, message.toString());
});