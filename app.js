"use strict";

const PORT = 3000;

var http = require('http');
var fs  = require('fs');
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", function(req, res){
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});


app.listen(PORT, function(){
  console.log("Express server listening on port", PORT)
});
