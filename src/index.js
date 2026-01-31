const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'fourth tweet',
    // });
    // const tweets = await Tweet.find({userEmail: 'a@b.com'});
    // const tweet = await Tweet.findById('697e367a91b6b3987562547d');
    // tweet.userEmail = 'NJS@hp33.com';
    // await tweet.save();
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('697e456e2dbf1211ceb2437f');
    console.log(tweet);
});