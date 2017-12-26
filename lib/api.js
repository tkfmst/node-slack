const request = require('request-promise');

exports.post = function(apiuri, payload) {
  const options = {
      method: 'POST',
      uri: apiuri,
      form: payload,
      json: true // Automatically stringifies the body to JSON
  };

  return request(options)
}
