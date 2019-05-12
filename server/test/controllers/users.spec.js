// const { expect } = require('chai');
// const db = require('../../db');
// const usersController = require('../../controllers/users');

// describe('user Controller', () => {
//   context('createUser', () => {
//     it('should create a user', async () => {
//       const response = await usersController.createUser({
//         email: 'test@test.com',
//         password: 'test',
//       });
//       expect(response).to.be.an('array').with.length(0);
//       const { rows } = await db.query('SELECT * FROM users');
//       expect(rows).to.be.an('array').with.length(1);
//       const [user] = rows;
//       expect(user.email).to.equal('test@test.com');
//       // check that password is hashed
//       expect(user.password).not.to.equal('test');
//     });
//   });

//   context('logIn', () => {
//     it('should get a post with the specified id', async () => {
//     });
//   });

//   context('verifyPassword', () => {
//   });
// });
