const fs = require('fs');

let count = 100;

console.log(`\n\n${++count}------------ A synchronous statement`);
console.log(`\n\n${++count}------------ A synchronous statement`);
setTimeout(() => {
  console.log(`\n\n${++count}------------ A timeout statement`);

  const promise = new Promise((res) => {
    setTimeout(() => {
      res();
    }, 20);
  });

  promise.then(() => {
    console.log(
      `\n\n${++count}------------ A promise resolve from within setTimeout`
    );
  });
}, 10);

setImmediate(() => {
  console.log(`\n\n${++count}------------ An immediate statement`);
});

fs.readFile('src/event-loop/sample.txt', () => {
  console.log(`\n\n${++count}------------ A readfile statement`);
});

const promise = new Promise((res) => {
  setTimeout(() => {
    res();
  }, 50);
});

promise.then(() => {
  console.log(`\n\n${++count}------------ A promise resolve`);
});

console.log(`\n\n${++count}------------ A synchronous statement`);

console.log(`\n\n${++count}------------ A synchronous statement`);
