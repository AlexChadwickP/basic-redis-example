const { createClient } = require('redis');

(async () => {
    const client = createClient({
        url: process.env.REDIS_URL
    });

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    const subscriber = client.duplicate();
    await subscriber.connect();

    await subscriber.subscribe('test', (message) => {
        console.log(message);
    });

    await client.disconnect();
})();