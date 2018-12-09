const express = require('express');
const bodyParser = require('body-parser');
const testRouter = require('./routers/test.js');

var server = express();
server.listen(3000);
server.use(express.static('html'));
server.use(bodyParser.urlencoded({
	extended : false
}));
server.use('/test',testRouter);

