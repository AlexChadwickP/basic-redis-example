const { createClient } = require('redis');

(async () => {
    const client = createClient({
        url: process.env.REDIS_URL
    });

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    await client.set('key', 'value');
    const value = await client.get('key');

    const publisher = client.duplicate();
    await publisher.connect();

    console.log(client.isOpen);

    await publisher.publish('test', 'testMessage');

    await client.disconnect();
})();