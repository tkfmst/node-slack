/**
 * app scope groups.read
 */
const api = require('../../lib/api.js');
const token = require('../../lib/token.js');

class Info {
  constructor(channelId) {
    const payload = {
      token   : token,
      channel : channelId,
    }

    this.self = api.post('https://slack.com/api/groups.info', payload)
  }

  members() {
    return this.self.then(i => i.group.members);
  }

  name() {
    return this.self.then(i => i.group.name_normalized);
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
