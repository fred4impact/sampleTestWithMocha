// In the file containing getUsers (e.g., api.js)
const axios = require('axios');
const userId = 4;

async function getUsers() {
  try {
    const response = await axios.get('http://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = getUsers;


// Example usage
// clear


