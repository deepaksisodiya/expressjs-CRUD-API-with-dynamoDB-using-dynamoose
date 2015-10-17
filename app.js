/**
 * Created by deepaksisodiya on 11/10/15.
 */


var express = require('express'),
  app = express(),
  port = 3001,
  bodyParser = require('body-parser'),
  dynamoose = require('dynamoose');

dynamoose.local();

dynamoose.AWS.config.update({
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: 'us-east-1'
});

app.listen(port, function () {
  console.log('listening for requests on localhost:%s', port);
});

app.use(bodyParser.json());

// dynamoose model start

var userSchema = require('./model.js');

// dynamoose model end

app.use('/', require('./routes.js'));