'use strict';
const path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser')
const app = express();
const { createMelody } = require('./melodyMaker');
function createMelodyURL(melody, req) {
    console.log(req)
    var queryParams = queryParamToString(melody);
    return `${req.headers.referer}audioplayer.html?${queryParams}`
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

// make another get request for a refresh of the view page

router.post('/', (req, res) => {
    const melody = createMelody();
    console.log({ body: req.body })
    res.json({
        "response_type": "in_channel",
        "text": `<${createMelodyURL(melody, req)}/public/>`
    })
});

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);