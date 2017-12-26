/**
 * app scope groups.read
 */
const api = require('../../lib/api.js');
const token = require('../../lib/token.js');

const payload = {
  token: token,
  exclude_archived: true,
  exclude_archived: true,

}

const list = api.post('https://slack.com/api/groups.list', payload)

const members = () => {
  return list.then(ls => {return ls.groups.map(grp => {return {
    'id'              : grp.id,
    'name_normalized' : grp.name_normalized,
    'members'         : grp.members,
    'is_mpim'         : grp.is_mpim,  // is im group
  }})})
}

module.exports = {
  'list'    : list,
  'members' : members,
}
