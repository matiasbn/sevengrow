const redis = require('redis');

var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL);

client.auth(process.env.REDIS_PASSWORD);

module.exports = client;