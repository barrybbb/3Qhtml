/**
 * By Baiping.
 */
var express = require('express');
var logger = require('morgan');
var app = express();
var server = require('http').Server(app);


// log requests.
app.use(logger('dev'));
// Static resource.
app.use(express.static(__dirname + '/public'));

// index.html
app.get('/', function(req, res){
  res.sendfile('room.html');
});



server.listen(3000);
console.log('listening on port 3000');

