# [JavaScript Mathematician]()

## Description

You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

```js
calculate(1)(1); // should return 2
calculate(1, 1)(1); // should return 3
calculate(1, 1)(1, -1); // should return 2
calculate(2, 4)(3, 7, 1); // should return 17
```

## My Solution

**JavaScript**

```js
const calculate =
  (...args1) =>
  (...args2) =>
    [...args1, ...args2].reduce((acc, cur) => acc + cur, 0);
```

```js
function calculate() {
  const outerSum = [...arguments].reduce((acc, curr) => acc + curr, 0);
  return function () {
    return outerSum + [...arguments].reduce((acc, curr) => acc + curr, 0);
  };
}
```

## Takeaways

1. I wasn't sure why I had to spread arguments into an array, rather than being able to simply call `arguments.reduce()`.
   The reason is, `arguments` is an Array-Like Object, not an actual array!
