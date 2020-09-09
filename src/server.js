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
    res.json({
        "text": `<https://zen-cori-c5a337.netlify.app/public/audioplayer.html?melody=${encodeURIComponent(JSON.stringify(createMelody()))}>`
    })
    res.sendFile('audioplayer.html', { root: localDir });
});

router.post('/', (req, res) => {
    //const character = randomChar()
    console.log({ body: req.body })
    res.json({
        "response_type": "in_channel",
        "text": `<https://zen-cori-c5a337.netlify.app/public/audioplayer.html?melody=${encodeURIComponent(JSON.stringify(createMelody()))}>`
    })
});

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);