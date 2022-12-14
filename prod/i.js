"use strict";
exports.__esModule = true;
var express = require("express");
var geoip_lite_1 = require("geoip-lite");
var serverless = require("serverless-http");
var app = express();
var router = express.Router();
router.get('/data', function (req, res) {
    console.log({ ip: req.ip });
    var ipData = (0, geoip_lite_1.lookup)(req.ip);
    var country = ipData && ipData.country;
    res.json({ country: country });
});
app.use('/.netlify/functions', router);
module.exports.handler = serverless(app);
