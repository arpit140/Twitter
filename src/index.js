
const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const HashtagRepository = require('./repository/hashtag-repository')
const TweetService = require('./services/tweet-service')

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
 
});


