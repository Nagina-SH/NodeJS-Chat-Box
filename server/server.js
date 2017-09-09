const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');
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
  
  //// send notification to newely joined user
  
	socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat-app'));
  
  // admin text to new user joined
  // send notification to all user except newely joined user
	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
  
	socket.on('createMessage', function(Message, callback){
	  console.log('Message', Message);

	  //get message from client user and send it back to all users vie io.emit
	  
	  io.emit('newMessage', {
		  from: Message.from,
		  text: Message.text,
		  createdAt: new Date().getTime()
	  });
	  callback('This is from server');

	});
	
	socket.on('createLocationMessage', (coords) => {
		io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
	});
	

});




server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});