// In your utility file (e.g., userValidation.js)
const getUsers = require('../src/index');
const userId = 1;

async function validateUserById(userId) {
    const users = await getUsers();
    const user = users.find(user => user.id === userId);
  
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }
  
    return user;
  }
  
  module.exports = validateUserById;
  