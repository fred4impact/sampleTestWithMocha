const { expect } = require('chai');
const getUsers = require('../src/sample-modified-user'); // Update with the correct relative path

describe('Modified getUsers function', () => {
  let fetchedUsers; // variable to store the fetched users for this test suite

  // Run this before all tests
  before(async () => {
    fetchedUsers = await getUsers();
  });

  it('should return an array of users', () => {
    expect(fetchedUsers).to.be.an('array');
  });

  it('should have at least one user in the array', () => {
    expect(fetchedUsers.length).to.be.at.least(3);
  });

  // Run this after all tests
  after(() => {
    // You can perform cleanup tasks here if needed
    // For example, setting fetchedUsers to null
    fetchedUsers = null;
  });
});
