var socket = io();

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
	
	socket.on('newEmail', function(email) {
		console.log('new mail', email);
	});
	
	// socket.emit('createEmail', {
		// to: 'Kanya@gmail.com',
		// message: 'Hello Laddu'
	// });
	
	// socket.emit('createMessage', {
		// from: 'Andrew',
		// text: 'Yep! I am online'
	// });
	
	socket.on('newMessage', function(Message){
		console.log('New Message', Message);
	});