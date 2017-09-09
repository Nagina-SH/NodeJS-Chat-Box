var expect = require('expect');

var {generateMessage} = require('./message');

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