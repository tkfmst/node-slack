/**
 * app scope channels.read
 */
const api = require('../../lib/api.js');
const token = require('../../lib/token.js');

const payload = {
  token: token,

}

const list = api.post('https://slack.com/api/users.list', payload)

const members = () => {
  return list.then(ls => {return ls.members.map(usr => {return {
    'id'        : usr.id,
    'name'      : usr.name,
    'real_name' : usr.real_name,
  }})})
}

/**
 * @param Array(String) ids
 */
const search = (ids) => {
  return members().then(ms => {
    return ms.filter(m => ids.indexOf(m.id) != -1);
  });
}

module.exports = {
  'list'    : list,
  'members' : members,
  'search'  : search,
}
