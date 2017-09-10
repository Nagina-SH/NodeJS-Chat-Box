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
	
	
	socket.on('newLocationMessage', function(Message){
		console.log('New Message', Message);
		var li = jQuery('<li></li>');
		var a = jQuery('<a target="_blank">My current location</a>');
		
		li.text(`${Message.from}: `);
		a.attr('href', Message.url);
		li.append(a);
		
		jQuery('#messages').append(li);

	});
	
	
	jQuery('#message-form').on('submit', function(e) {
		e.preventDefault();
		
		var messageTextbox = jQuery('[name=message]');
		
		socket.emit('createMessage', {
			from: 'User',
			text: jQuery('[name=message]').val()
		}, function(){
			messageTextbox.val(''); 
		});
		
	});
	
	
	
var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  
  
  locationButton.attr('disabled', 'disabled').text('Sending location...');
  
  navigator.geolocation.getCurrentPosition(function (position) {
	locationButton.removeAttr('disabled').text('Send location');  
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
	//console.log(position);
  }, function (err) {
	locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location.');
  });
});
	