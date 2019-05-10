const { expect } = require('chai');
const db = require('../../db');
const postsController = require('../../controllers/posts');

describe('post Controller', () => {
  beforeEach(async () => {
    await db.query('DELETE FROM users');
    await db.query("INSERT INTO users (email, password) VALUES ('test@test.com', 'test')");
    const userResponse = await db.query('SELECT * FROM users');
    [this.user] = userResponse.rows;
    await db.query('DELETE FROM posts');
    const query = ('INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3)');
    const values = ['test', 'test', this.user.id];
    await db.query(query, values);
    const postResponse = await db.query('SELECT * FROM posts');
    [this.post] = postResponse.rows;
  });

  context('getPosts', () => {
    it('should get all posts', async () => {
      const response = await postsController.getPosts();
      expect(response).to.be.an('array').with.length(1);
      const [post] = response;
      expect(post.id).to.equal(this.post.id);
      expect(post.user_id).to.equal(this.user.id);
    });
  });

  context('getPost', () => {
    it('should get a post with the specified id', async () => {
      const response = await postsController.getPost({ id: this.post.id });
      expect(response).to.be.an('array').with.length(1);
      const [post] = response;
      expect(post.id).to.equal(this.post.id);
      expect(post.user_id).to.equal(this.user.id);
    });
  });

  context('updatePost', () => {
    it('should update a post with the specified id', async () => {
      const response = await postsController.updatePost({
        id: this.post.id,
        title: 'NewTitle',
        content: 'NewContent',
      });
      expect(response).to.be.an('array').with.length(0);
      const { rows } = await db.query('SELECT * FROM posts');
      expect(rows).to.be.an('array').with.length(1);
      const [post] = rows;
      expect(post.title).to.equal('NewTitle');
      expect(post.content).to.equal('NewContent');
    });
    it('should error if no id is specified', async () => {
      try {
        await postsController.deletePost({
          id: null,
        });
      } catch (err) {
        expect(err.message).to.equal('No id specified');
      }
    });
  });

  context('createPost', () => {
    it('should create a new post', async () => {
      const response = await postsController.createPost({
        content: 'newContent',
        title: 'newTitle',
        userId: this.user.id,
      });
      expect(response).to.be.an('array').with.length(0);
      const { rows } = await db.query('SELECT * FROM posts');
      expect(rows).to.be.an('array').with.length(2);
    });
    it('should error if there is no title', async () => {
      try {
        await postsController.createPost({
          content: 'newContent',
          title: null,
          userId: this.user.id,
        });
        throw new Error('Should have thrown!');
      } catch (err) {
        expect(err.message).to.equal('No title specified');
      }
    });

    it('should error if there is no content', async () => {
      try {
        await postsController.createPost({
          content: null,
          title: 'newTitle',
          userId: this.user.id,
        });
        throw new Error('Should have thrown!');
      } catch (err) {
        expect(err.message).to.equal('No content specified');
      }
    });

    it('should error if there is no userId', async () => {
      try {
        await postsController.createPost({
          content: 'newContent',
          title: 'newTitle',
          userId: null,
        });
        throw new Error('Should have thrown!');
      } catch (err) {
        expect(err.message).to.equal('No userId specified');
      }
    });
  });

  context('deletePost', () => {
    it('should delete a post', async () => {
      const response = await postsController.deletePost({
        id: this.post.id,
      });
      expect(response).to.be.an('array').with.length(0);
      const { rows } = await db.query('SELECT * FROM posts');
      expect(rows).to.be.an('array').with.length(0);
    });

    it('should error if no id is specified', async () => {
      try {
        await postsController.deletePost({
          id: null,
        });
      } catch (err) {
        expect(err.message).to.equal('No id specified');
      }
    });
  });
});
