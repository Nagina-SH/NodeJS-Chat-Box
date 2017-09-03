const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.Io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 0888;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('user connected');
});
 
// io.sockets.on('connection', function(socket){  
        // console.log('a user connected');  
        // socket.on('disconnect', function(){
           // console.log('user disconnected'); 
        // });
  // });


server.listen(port, () => {
	console.log(`server up and running on ${port}`);
})