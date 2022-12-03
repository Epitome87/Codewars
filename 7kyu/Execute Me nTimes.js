/*
You're given a procedure / method that executes a passed action n times, but it does so in a purely sequential manner. If you inspect the sample tests, you'll find that the action takes about 1 second to complete, and this action is repeated 20 times which results in a timeout.

Find a way to execute the action n times in parallel, such that the sample tests complete under the 12 second time limit imposed by Codewars. The submission tests will also test for similar scenarios.

Hint: If you're not sure where to start, read up on async/await.
*/

// My solution:
const execute = async (action, nTimes) => {
  const calls = [];
  for (let i = 0; i < nTimes; i++) {
    calls.push(action());
  }
  await Promise.all([...calls]);
};

// Clever user solution:
function execute(action, n) {
  return Promise.all(Array.from({ length: n }, action));
}
