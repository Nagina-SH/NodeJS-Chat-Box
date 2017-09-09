var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Admin';
		var text = 'This is testing for generateMessage function';
		var message = generateMessage(from, text);
		//console.log(message);
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from : from,
			text: text
		});
	});
});


describe('generateLocationMessage', () => {
	it('should generate correct location objects', () => {
		var from = 'Kannu';
		var latitude = 24;
		var longitude = 36;
		var url = 'https://www.google.com/maps?q=24,36';
		
		var LocationMessage = generateLocationMessage(from, latitude,longitude)
		
		expect(LocationMessage.createdAt).toBeA('number');
		expect(LocationMessage).toInclude({
			from : from,
			url: url
		});
		
	});
}) ;