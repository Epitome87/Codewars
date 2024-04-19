# [Once](https://www.codewars.com/kata/5307ff5b588fe6d7000000a5)

## Description

You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

```js
logOnce = once(console.log);
logOnce('foo'); // -> "foo"
logOnce('bar'); // -> no effect
```

## My Solution

**JavaScript**

```js
const once =
  (fn, callCount = 0) =>
  (...args) =>
    !callCount++ ? fn(...args) : undefined;
```

```js
const once = (fn) => {
  let hasBeenCalled = false;
  return (...args) => {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};
```

### User Solution

**JavaScript**

```js
function once(fn) {
  var call = true;
  return function () {
    if (call) {
      call = false;
      return fn.apply(this, arguments);
    }
  };
}
```
