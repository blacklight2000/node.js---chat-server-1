var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
//require('socket.io').listen(app, { log: false }); <-- that's for completely removing socket.io debugging
io.set('log level', 1); // reduce logging


server.listen(8080)

app.get('/', function(req, res) {
  res.sendfile(__dirname+'/index.html')
 })

io.sockets.on('connection', function(socket) {
  console.log("Connection...")
  socket.on('send message', function(data) { io.sockets.emit('new message', data); console.log(data) })
  
  })
