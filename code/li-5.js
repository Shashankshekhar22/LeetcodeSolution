// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const [v1, v2] = await Promise.all([promise1, promise2]);
  return v1 + v2;
};

// OR One liner solution

var addTwoPromises = async function (promise1, promise2) {
  return (await promise1) + (await promise2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let initialValue = init;
  return {
    increment: () => {
      initialValue = ++initialValue;
      return initialValue;
    },
    decrement: () => {
      initialValue = --initialValue;
      return initialValue;
    },
    reset: () => {
      initialValue = init;
      return init;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
