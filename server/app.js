require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('./middleware/bodyParser');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(cors());
app.use(bodyParser);
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});
routes(app);
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

module.exports = app;
