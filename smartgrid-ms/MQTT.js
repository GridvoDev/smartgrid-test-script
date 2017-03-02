'use strict';
const mqtt = require('mqtt');

let client = mqtt.connect('mqtt://117.27.142.62:61643');
let timeout;
client.on('connect', () => {
    timeout = setInterval(() => {
        let payload = JSON.stringify({
            v: 1000 + 100 * Math.random(),
            t: (new Date()).getTime()
        });
        client.publish('NWHSDZ-YL', payload, () => {
            console.log(payload);
        });
    }, 60000);
});

client.on('message', (topic, message) => {
    console.log(topic.toString());
    console.log(message.toString());
});

client.on('close', () => {
    console.log("is close");
    clearInterval(timeout);
    client.end();
});

