const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    const tweets = await Tweet.find({
        content: ["First tweet","tweet with a comment","12m3 4"]
    });
    console.log(tweets);
});