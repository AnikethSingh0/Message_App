const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const Hashtag = require('./models/hashtag');
const TweetRepository = require('./repository/tweetRepository');
const TweetService = require('./services/tweet-service');
const app = express();

const run = () => {
    app.listen(3000, async() => {
        console.log('Server is running on port 3000');
        await connect();
        console.log('Database connected successfully');
    });
};

run();