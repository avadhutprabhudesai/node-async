const timerPromises = require('timers/promises');

const logEvery2ms = () => {
  console.log('\n\n****** timers/setinterval.js -> logEvery2ms() ******\n\n');
};

const clearIntervals = (interval) => {
  console.log(
    '\n\n****** timers/setinterval.js -> clearIntervals() ******\n\n'
  );
  clearInterval(interval);
};

const interval = setInterval(() => {
  logEvery2ms();
}, 2);

setTimeout(() => {
  clearIntervals(interval);
}, 50);

(async function () {
  const intervalPromise = timerPromises.setInterval(
    10,
    'Value produced every 10 ms'
  );
  let count = 0;
  for await (const iterator of intervalPromise) {
    if (++count > 10) break;
    console.log(
      '\n\n****** timers/setinterval.js -> timerPromise.setInterval() ******\n\n'
    );
    console.log(`${count}:  ${iterator}`);
  }
})();
