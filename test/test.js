const { expect } = require('chai');
const getUsers = require('../src/index'); // Update with the correct relative path
const USERAME = "Patricia Lebsack";
const USERID = 4;



describe('getUsers function', () => {
  it('should return an array of users', async () => {
    const users = await getUsers();
    expect(users).to.be.an('array');
  });

  it('should have at least one user in the array', async () => {
    const users = await getUsers();
    expect(users.length).to.be.at.least(1);
  });
    
    
  it('should validate user with ID 4', async () => {
    const users = await getUsers();
    const userWithId4 = users.find(user => user.id ===  USERID);

    expect(userWithId4, 'User with ID 4 not found').to.exist;
    expect(userWithId4.name).to.equal(USERAME); // Replace with the expected name or other properties
  });
});
