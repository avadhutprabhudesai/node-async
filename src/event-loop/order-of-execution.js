const fs = require('fs');
const fsp = require('fs/promises');

let count = 0;
console.log(`\n\n${++count}------------ A synchronous statement`);

setTimeout(() => {
  console.log(`\n\n${++count}------------ A timeout statement`);
}, 10);

setImmediate(() => {
  console.log(`\n\n${++count}------------ An immediate statement`);
});

fs.readFile('src/event-loop/sample.txt', () => {
  console.log(`\n\n${++count}------------ A readfile statement`);
});

process.nextTick(() => {
  console.log(`\n\n${++count}------------ A process.nextTick statement`);
});

const filePromise = fsp.open('src/event-loop/read.txt', 'r');

filePromise.then((handle) => {
  handle.on('close', () => {
    console.log(`\n\n${++count}------------ A file handle close statement`);
  });

  handle.close();
});

const promise = new Promise((res) => {
  res();
});

promise.then(() => {
  console.log(`\n\n${++count}------------ A promise resolve`);
});
