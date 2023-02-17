/*
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
*/

// My one-line solution (not best practice!):
const once =
  (fn, callCount = 0) =>
  (...args) =>
    !callCount++ ? fn(...args) : undefined;

// My straight-forward solution:
const once = (fn) => {
  let hasBeenCalled = false;
  return (...args) => {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};

// Top user solution:
function once(fn) {
  var call = true;
  return function () {
    if (call) {
      call = false;
      return fn.apply(this, arguments);
    }
  };
}
