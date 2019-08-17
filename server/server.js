var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3001;

var users = [];
var connections = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected %s sockets connected', connections.length);

  //disconnect
  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  socket.on('send message', function(data){
    io.sockets.emit('new message', {msg: data});
    console.log(data)
  });

  socket.on('testing', function(data){
    console.log('testing: ' + data);
  })
});

server.listen(port, function(){
  console.log('listening on *:' + port);
});