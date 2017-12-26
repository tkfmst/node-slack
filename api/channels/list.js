/**
 * app scope channels.read
 */
const api = require('../../lib/api.js');
const token = require('../../lib/token.js');

const payload = {
  token: token,
  exclude_archived: true,
  exclude_archived: true,

}

const list = api.post('https://slack.com/api/channels.list', payload)

const members = () => {
  return list.then(ls => {return ls.channels.map(ch => {return {
    'id'              : ch.id,
    'name_normalized' : ch.name_normalized,
    'members'         : ch.members,
  }})})
}

module.exports = {
  'list'    : list,
  'members' : members,
}
