const conf = require('../conf/token.json');

const get = function() {
  if (process.env.TOKEN != null) {
    return process.env.TOKEN;
  } else if (conf.token != null) {
    return conf.token;
  }

  throw new Error('Token dose not exist.');
}

module.exports = get();

