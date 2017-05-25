const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Christian',
      room: 'Survivor Fans'
    }, {
      id: '2',
      name: 'Alec',
      room: 'Survivor Fans'
    }, {
      id: '3',
      name: 'Alex',
      room: 'Pizza Rocks'
    }]
  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Christian',
      room: 'Survivor Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });
  it('should remove a user', () => {
    var user = users.removeUser('2');
    expect(user.id).toBe('2');
    expect(users.users.length).toBe(2);
  });
  it('should not remove a user', () => {
    var user = users.removeUser('4');
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });
  it('should find user', () => {
    var user = users.getUser('2');
    expect(user.id).toBe('2');
  });
  it('should not find a user', () => {
    var user = users.getUser('4');
    expect(user).toNotExist();
  });
  it('should return names for Survivor Fans room', () => {
    var userList = users.getUserList('Survivor Fans');
    expect(userList).toEqual(['Christian', 'Alec']);
  });
  it('should return names for Pizza Rocks room', () => {
    var userList = users.getUserList('Pizza Rocks');
    expect(userList).toEqual(['Alex']);
  });
});
