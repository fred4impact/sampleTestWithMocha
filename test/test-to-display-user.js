const { expect } = require('chai');
const getUsers = require('../src/sample-modified-user'); 
const userId = 4; // change this userId to tet for any user based on its ID


describe('getUsers function', () => {
  let fetchedUsers; //  variable to store the fetched users for this test suite

  // Run this before all tests
  before(async () => {
    fetchedUsers = await getUsers();
  });

  it('should return an array of users', () => {
    expect(fetchedUsers).to.be.an('array');
  });

  it('should have at least one user in the array', () => {
    expect(fetchedUsers.length).to.be.at.least(1);
  });

  // Example test for displaying the name and email of a specific user
  it('should display the name and email of a specific user', () => {
    // Choose a specific userId to test (replace 1 with the desired userId)
    const userIdToTest = userId;

    // Find the user with the specified userId
    const userToTest = fetchedUsers.find(user => user.id === userIdToTest);

    // Display the name and email of the user
    console.log(`Name: ${userToTest.name}`);
    console.log(`Email: ${userToTest.email}`);

    // Assert the values if needed
    expect(userToTest.name).to.equal('Patricia Lebsack');
    expect(userToTest.email).to.equal('Julianne.OConner@kory.org');
  });

  // Run this after all tests
  after(() => {
    // You can perform cleanup tasks here if needed
    // For example, setting fetchedUsers to null
    fetchedUsers = null;
  });
});
