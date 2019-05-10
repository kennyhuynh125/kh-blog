require('dotenv').config();
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const bodyParser = require('./middleware/bodyParser');

const app = express();

app.use(cors());
app.use(bodyParser);
routes(app);

module.exports = app;
