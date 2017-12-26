const groups = require('../api/groups');

groups.list.members().then(m => console.log(m));
groups.info('G8L0DQG14').name().then(n => console.log(n));
groups.info('G8L0DQG14').members().then(m => console.log(m));
