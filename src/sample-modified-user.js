const axios = require('axios');
let users; // Declare a variable to store the fetched users

async function getUsers() {
  if (!users) {
    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/users');
      users = response.data;
    } catch (error) {
      throw error;
    }
  }

  return users;
}

module.exports = getUsers;
