const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// adds event listener to the event 'response'
customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} ${id}`);
});

customEmitter.on('response', () => {
  console.log('some other logic here');
});

// emits the event
customEmitter.emit('response', 'john', 34);
