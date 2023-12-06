const axios = require('axios');
async function createPost(title, body, userId) {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = createPost;