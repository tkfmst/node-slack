/**
 * app scope channels.read
 */
const api = require('../../lib/api.js');
const token = require('../../lib/token.js');

class Info {
  constructor(channelId) {
    const payload = {
      token   : token,
      channel : channelId,
    }

    this.self = api.post('https://slack.com/api/channels.info', payload)
  }

  members() {
    return this.self.then(i => i.channel.members);
  }

  name() {
    return this.self.then(i => i.channel.name_normalized);
  }
}

const instance = {};

const generate = (channelId) => {
  if (instance[channelId] == null) {
    instance[channelId] = new Info(channelId);
  }
  return instance[channelId];
}

module.exports = generate
