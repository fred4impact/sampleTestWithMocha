
const { expect } = require('chai');
const createPost = require('../src/createPostRequest'); 

describe('POST Request to create a new resource', () => {
  it('should create a new post', async () => {
    const title = 'foo';
    const body = 'bar';
    const userId = 4;

    const newPost = await createPost(title, body, userId);

    // Validate the response
    expect(newPost).to.have.property('id');
    expect(newPost.title).to.equal(title);
    expect(newPost.body).to.equal(body);
    expect(newPost.userId).to.equal(userId);
  });
});
