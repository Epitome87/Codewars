# [Training JS #10: Loop Statement - For](https://www.codewars.com/kata/5721a78c283129e416000999)

## Description

The function `pickIt` accepts 1 parameter, `arr`, which is an array of numbers. We need to traverse `arr` by using a `for` loop. If an element is an odd number, push it to the `odd` array, and if it's an even number, push it to the `even` array.

I've defined two arrays `odd` and `even` in the function, and also wrote the return statement. Your work is to write a `for` loop.

## My Solution

**JavaScript**

```js
const pickIt = (arr) => {
  const odd = [];
  const even = [];

  for (let n of arr) {
    (n % 2 ? odd : even).push(n);
  }

  return [odd, even];
};
```

```js
const pickIt = (arr) => {
  const odd = [];
  const even = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
  }

  return [odd, even];
};
```
