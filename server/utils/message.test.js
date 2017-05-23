const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Christian';
    var text = 'test message';
    var message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Christian';
    var latitude = 38.890109;
    var longitude = -77.0095816;
    var url = 'https://www.google.com/maps?q=38.890109,-77.0095816'
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  });
});
