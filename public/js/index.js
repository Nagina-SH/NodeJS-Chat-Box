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
 
	
	// socket.emit('createMessage', {
		// from: 'Andrew',
		// text: 'Yep! I am online'
	// }, function(data) {
		// console.log('Got it', data);
	// }
	// );
	
	socket.on('newMessage', function(Message){
		console.log('New Message', Message);
		
		var li = jQuery('<li></li>');
		li.text(`${Message.from}: ${Message.text}`);
		
		jQuery('#messages').append(li);
	});
	
	jQuery('#message-form').on('submit', function(e) {
		e.preventDefault();
		
		socket.emit('createMessage', {
			from: 'User',
			text: jQuery('[name=message]').val()
		}, function(){
			 
		});
		
	});