'use strict';
const path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser')
const app = express();

const router = express.Router();
const localDir = __dirname;
router.get('/', (req, res) => {
    // res.json({
    //     "text": "hello"
    // }    )
    res.sendFile('audioplayer.html', { root: localDir });
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);