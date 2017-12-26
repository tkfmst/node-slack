const users = require('../api/users');

users.list.list.then(m => console.log(m));
users.list.members().then(m => console.log(m));
users.list.search(['U89UWE8N8', 'U8K5GTH1A']).then(n => console.log(n));
