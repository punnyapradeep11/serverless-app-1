var express = require('express');
var serverless = require('serverless-http'); //wraps apis in serverless
var app = express();
var routers = require('./routers/router')
app.use(routers);

module.exports.handler = serverless(app);