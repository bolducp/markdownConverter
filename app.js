"use strict";

const PORT = 3000;

var http = require('http');
var fs  = require('fs');
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", function(req, res){
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});

app.post("/parse", function(req, res){
  var markdown = req.body.markdown;
  var convertedHTML = marked(markdown);
  res.send(convertedHTML);
});

app.listen(PORT, function(){
  console.log("Express server listening on port", PORT)
});
