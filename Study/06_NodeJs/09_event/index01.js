const eventeEmitter = require('events');
// events = class

const emitter = new eventeEmitter();
emitter.on('mymsg', () => {
  console.log('call Listner');
})

emitter.emit('mymsg');