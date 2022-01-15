const timerPromises = require('timers/promises');
const logImmediate = () => {
  console.log('\n\n****** timers/setimmediate.js -> logImmediate() ******\n\n');
};

const cleateImmediates = (immediates) => {
  console.log(
    '\n\n****** timers/setimmediate.js -> cleatImmediates() ******\n\n'
  );
  clearImmediate(immediates);
};

const immediates = setImmediate(() => {
  logImmediate();
});

setImmediate(() => {
  cleateImmediates(immediates);
});

(async function () {
  const result = await timerPromises.setImmediate('A simple text');
  console.log(
    '\n\n****** timers/setimmediate.js -> value returned by timers/promises setImmediate() ******'
  );
  console.log(result);
  console.log('\n\n');
})();
