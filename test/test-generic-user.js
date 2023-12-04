const { expect } = require('chai');
const getUsers = require('../src/index');
const validateUserById = require('../src/userValidation');

const userId = 5; // chnage the userId to test With


describe('User Validation Generic Tests', () => {
  it('should validate user with a specific ID using the utility function', async () => {
    const userIdToValidate = userId;
    const validatedUser = await validateUserById(userIdToValidate);

    expect(validatedUser.id).to.equal(userIdToValidate);
  });

  it('should throw an error for a non-existent user ID using the utility function', async () => {
    const nonExistentUserId = 999;
    // Use a try-catch block to capture the expected error
    try {
      await validateUserById(nonExistentUserId);
      // If no error is thrown, fail the test
      expect.fail('Expected an error but did not receive one');
    } catch (error) {
      expect(error.message).to.equal(`User with ID ${nonExistentUserId} not found`);
    }
  });
});
