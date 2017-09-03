const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8888;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
  
  socket.emit('newEmail', {
	  from: 'shail@gmail.com',
	  text: 'Hi, I mean',
	  createdAt: 123
  });
  
  socket.on('createEmail', (newmail) => {
	  console.log('createEmail', newmail);
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});