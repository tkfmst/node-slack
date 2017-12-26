const channels = require('../api/channels');
const users = require('../api/users');

new Promise(resolve => {
  return resolve();
}).then(() => {
  const userlist = async () => {
    const ms = await channels.info('C89CF1S57').members();
    const us = await users.list.search(ms)
    return us;
  }
  return userlist();
}).then(ul => {
  console.log(ul);
})
