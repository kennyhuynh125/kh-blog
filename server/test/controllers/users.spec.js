const bcrypt = require('bcrypt');
const { expect } = require('chai');
const db = require('../../db');
const usersController = require('../../controllers/users');

describe('user Controller', () => {
  before(async () => {
    await db.query('DELETE FROM users');
  });

  context('createUser', () => {
    it('should create a user', async () => {
      const response = await usersController.createUser({
        email: 'test@test.com',
        password: 'test',
      });
      expect(response).to.be.an('array').with.length(1);
      const { rows } = await db.query('SELECT * FROM users');
      expect(rows).to.be.an('array').with.length(1);
      const [user] = rows;
      expect(user.email).to.equal('test@test.com');
      // check that password is hashed
      expect(user.password).not.to.equal('test');
      const compare = await bcrypt.compare('test', user.password);
      expect(compare).to.equal(true);
    });
  });

  context('logIn', () => {
    before(async () => {
      await usersController.createUser({
        email: 'test@test.com',
        password: 'test',
      });
    });
    it('should log a user in by creating a token', async () => {
      const response = await usersController.logIn({
        email: 'test@test.com',
        password: 'test',
      });
      expect(response).to.not.equal(null);
    });
    it('should throw an error if no email found', async () => {
      try {
        await usersController.logIn({
          email: 'random@random.com',
          password: 'test',
        });
        throw new Error('Should have thrown!');
      } catch (e) {
        expect(e.message).to.equal('Error: No user found with email random@random.com');
      }
    });
    it('should throw an error if password is incorrect', async () => {
      try {
        await usersController.logIn({
          email: 'test@test.com',
          password: 'testt',
        });
        throw new Error('Should have thrown!');
      } catch (e) {
        expect(e.message).to.equal('Error: Incorrect password');
      }
    });
  });
});
