'use strict';
const path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser')
const app = express();
const randomChar = require('./randomCharacter');

const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        "text": randomChar()
    });
});
router.post('/', (req, res) => {
    const character = randomChar()
    console.log({ body: req.body })
    res.json({
        "response_type": "in_channel",
        "text": character,
        "blocks": [
            {
                "type": "context",
                "elements": [
                    {
                        "type": "mrkdwn",
                        "text": `:crystal_ball: <@${req.body.user_id}> summoned me!`
                    }
                ]
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": character,
                }
            }
        ]
    })
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);