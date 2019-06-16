const posts = require('./posts');
const suggestions = require('./suggestions');
const users = require('./users');

module.exports = (app) => {
  app.use('/posts', posts);
  app.use('/suggestions', suggestions);
  app.use('/users', users);
};
