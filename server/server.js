'use strict';
const path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const { createMelody } = require('./melodyMaker');

function createMelodyURL(melody, req) {
    console.log(req)
    var queryParams = queryParamToString(melody);
    return `${req.headers.origin}?${queryParams}`
}

function queryParamToString(queryObject) {
    var queryKeys = Object.keys(queryObject)
    return queryKeys.reduce((url, key, i) => {
        var paramString = `${key}=${encodeURIComponent(JSON.stringify(queryObject[key]))}`
        if(i < queryKeys.length - 1) {
            paramString += '&'
        }
        return url + paramString
    }, '')
}

const router = express.Router();
const localDir = __dirname;
router.get('/', (req, res) => {
    const melody = createMelody();
    res.json({
        "url": createMelodyURL(melody, req)
    })
});

router.post('/', (req, res) => {
    const melody = createMelody();
    console.log({ body: req.body })
    res.json({
        "response_type": "in_channel",
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": ":musical_note: Ooooh you want your own song, eh? :musical_note:"
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Take me to my unique melody!"
                    },
                    "value": "melody_url_button",
                    "action_id": "button",
                    "url": createMelodyURL(melody, req)
                }
            }
        ]
    })
});


app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
