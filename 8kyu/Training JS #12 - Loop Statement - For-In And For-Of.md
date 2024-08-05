# [Training JS #12: Loop Statement - For-In and For-Of](https://www.codewars.com/kata/5722b3f0bd5583cf44001000)

## Description

The function `giveMeFive` accepts 1 parameter, `obj`, which is an object.

Create an array (which you will eventually return). Then, traverse `obj`, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.

You should use `for..in` in your code, otherwise your solution may not pass this kata.

## My Solution

**JavaScript**

```js
const giveMeFive = (obj) => {
  const res = [];

  for (let prop in obj) {
    if (prop.length === 5) res.push(prop);
    if (obj[prop].length === 5) res.push(obj[prop]);
  }

  return res;
};
```
