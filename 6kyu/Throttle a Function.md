# [Throttle a Function](https://www.codewars.com/kata/537e2f99be93a055e5000012)

## Description

Write a function wrapper that will only allow the wrapped function to run at most once within the given time limit. Return the previous result for any additional calls within the time limit. Multiple functions should be able to be throttled at the same time.

```js
var counter = (function () {
    var myCount = 0;
    return function () {
      return myCount++;
    };
  })(),
  slowCounter = throttle(counter, 25),
  startTime = Date.now(),
  prev = -Infinity,
  now = 0,
  results = [];

while (Date.now() - startTime < 99) {
  now = slowCounter();
  if (now !== prev) {
    console.log(Date.now() - startTime);
    prev = now;
    results.push(now);
  }
}
```

## My Solution

**JavaScript**

```js
const throttle = (func, delay) => {
  let previousValue = null;
  let lastCallTime = -Infinity;

  return () => {
    const now = Date.now();

    if (now - lastCallTime >= delay) {
      lastCallTime = now;
      previousValue = func();
    }

    return previousValue;
  };
};
```
