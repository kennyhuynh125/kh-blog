require('dotenv').config();
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const winston = require('winston');
const routes = require('./routes');
const bodyParser = require('./middleware/bodyParser');

const { winstonConfig } = require('./config');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(winstonConfig.file),
    new winston.transports.Console(winstonConfig.console),
  ],
});
logger.stream = {
  write: message => logger.info(message),
};

const app = express();

app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser);
routes(app);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build/index.html'));
});

module.exports = app;
