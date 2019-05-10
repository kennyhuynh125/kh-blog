const bodyParser = require('body-parser');

const json = bodyParser.json();

module.exports = json;

module.exports.urlencoded = bodyParser.urlencoded({
  extended: false,
});
