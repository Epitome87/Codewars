# [Function Cache](https://www.codewars.com/kata/525481903700c1a1ff0000e1)

## Description

If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

```js
var complexFunction = function(arg1, arg2) { complex calculation in here  };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
```

## My Solution

**JavaScript**

```js
const cache = (func) => {
  const memo = {};
  return (...args) => {
    const key = JSON.stringify(...args);
    if (key in memo) return memo[key];
    return (memo[key] = func(...args));
  };
};
```

### User Solution

**JavaScript**

```js
// Slightly-shorter user solution:
const cache = (func) => {
  const cache = {};
  return (...a) => {
    let args = JSON.stringify(...a);
    return cache.hasOwnProperty(args) ? cache[args] : (cache[args] = func(...a));
  };
};
```

## Takeaways:

1. `if (memo[key])` doesn't work since we can have null and undefined as keys.
   Could also write: `if (memo.hasOwnProperty(key)) return memo[key];`
