const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = {name:'Christian'};
    var string = isRealString(str);
    expect(string).toBe(false);
  });
  it('should reject strings with only spaces', () => {
    var str = '                  ';
    var string = isRealString(str);
    expect(string).toBe(false);
  });
  it('should allow strings with non-space characters', () => {
    var str = '        Christian       ';
    var string = isRealString(str);
    expect(string).toBe(true);
  });
});
