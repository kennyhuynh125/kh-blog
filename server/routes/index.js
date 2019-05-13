const posts = require('./posts');
const users = require('./users');

module.exports = (app) => {
  app.use('/posts', posts);
  app.use('/users', users);
};
