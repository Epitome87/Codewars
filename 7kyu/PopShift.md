# [PopShift](https://www.codewars.com/kata/57cec34272f983e17800001e)

## Description

You will be given a string.

You need to return an array of three strings by gradually pulling apart the string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1.
b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

Example:

"exampletesthere" becomes: ["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.

## My Solution

**JavaScript**

```js
const popShift = (s) => {
  const result = ['', '', [...s]];

  while (result[2].length > 1) {
    result[0] += result[2].pop();
    result[1] += result[2].shift();
  }

  return [result[0], result[1], result[2].join('')];
};
```

```js
const popShift = (s) => {
  const result = [[], [], [...s]];

  while (result[2].length > 1) {
    result[0].push(result[2].pop());
    result[1].push(result[2].shift());
  }

  return [result[0].join(''), result[1].join(''), result[2].join('')];
};
```

### User Solution

**JavaScript**

```js
function popShift(s, res = ['', '']) {
  return s.length < 2 ? res.concat([s]) : popShift(s.slice(1, -1), [res[0] + s.slice(-1), res[1] + s[0]]);
}
```
