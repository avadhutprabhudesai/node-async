require('./order-of-execution');
require('./order-of-exec-nested');

/**
 * Event loop phases
 *      Timers
 *      Pending callbacks
 *      Idle, prepare
 *      Poll
 *      Check
 *      Close callbacks
 *      Microtasks
 *
 *
 * Order of execution of different async tasks when they contain
 *      1. No nested tasks
 *      2. Same type of nested async tasks
 *      3. Different type of nested async tasks
 *
 * process.nextTick
 * Promises
 *
 *  Questions
 *      . What is the max number of callbacks
 */
