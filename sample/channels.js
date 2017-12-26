const channels = require('../api/channels');

channels.list.members().then(m => console.log(m));

channels.info('C89CF1S57').members().then(m => console.log(m));
channels.info('C89CF1S57').name().then(n => console.log(n));
