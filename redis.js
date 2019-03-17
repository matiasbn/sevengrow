const redis = require('redis');

var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL);

client.auth(process.env.REDIS_PASSWORD, function (err, res) {
    if (err) {
        response.end("err: " + err);
    }
});

module.exports = client;