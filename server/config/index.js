const devConfig = require('./dev');
const prodConfig = require('./prod');
const testConfig = require('./test');
const winstonConfig = require('./winston');


const getConfig = () => {
  let config = devConfig;
  if (process.env.NODE_ENV === 'test') {
    config = testConfig;
  } else if (process.env.NODE_ENV === 'production') {
    config = prodConfig;
  }
  return config;
};

module.exports = {
  getConfig,
  winstonConfig,
};
