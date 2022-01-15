const timerPromises = require('timers/promises');
const logAfter2ms = () => {
  console.log('\n\n****** timers/settimeout.js -> logAfter2ms() ******\n\n');
};

const clearTimeouts = (timeoutObj) => {
  console.log('\n\n****** timers/settimeout.js -> clearTimeouts() ******\n\n');
  clearTimeout(timeoutObj);
};

const timeout = setTimeout(() => {
  logAfter2ms();
}, 2);

setTimeout(() => {
  clearTimeouts(timeout);
}, 3);

(async function () {
  const result = await timerPromises.setTimeout(5, 'A simple text');
  console.log(
    '\n\n****** timers/settimeout.js -> value returned by timers/promises setTimeout() ******'
  );
  console.log(result);
  console.log('\n\n');
})();
