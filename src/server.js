'use strict';
const path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser')
const app = express();
const { createMelody } = require('./melodyMaker');

const router = express.Router();
const localDir = __dirname;
router.get('/', (req, res) => {
    const melody = createMelody();
    res.json({
        "text": `<https://zen-cori-c5a337.netlify.app/public/audioplayer.html?key=${encodeURIComponent(melody[1])}&scale=${encodeURIComponent(melody[2])}&melody=${encodeURIComponent(JSON.stringify(melody[0]))}&scaleNotes=${encodeURIComponent(JSON.stringify(melody[3]))}>`
    })
    res.sendFile('audioplayer.html', { root: localDir });
});

// make another get request for a refresh of the view page

router.post('/', (req, res) => {
    const melody = createMelody();
    console.log({ body: req.body })
    res.json({
        "response_type": "in_channel",
        "text": `<https://zen-cori-c5a337.netlify.app/public/audioplayer.html?key=${encodeURIComponent(melody[1])}&scale=${encodeURIComponent(melody[2])}&melody=${encodeURIComponent(JSON.stringify(melody[0]))}>`
    })
});

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);