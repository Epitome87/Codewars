# [Make Me Slow](https://www.codewars.com/kata/57f59da8d3978bb31f000152)

## Description

Make me slow! Calling makeMeSlow() should take at least 7 seconds.

## My Solution

**JavaScript**

```js
const makeMeSlow = () => {
  for (let i = 0; i < 200000; i++) for (let j = 0; j < 100000; j++) {}
};
```

### User Solution

**JavaScript**

```js
// Tricks Kata's test logic into thinking 7 seconds has passed!
function makeMeSlow() {
  Date.prototype.getTime = () => Date.now() + 7777;
}
```
