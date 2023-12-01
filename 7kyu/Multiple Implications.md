# [Multiple Implications](https://www.codewars.com/kata/58f671ee5522a9c33800009b)

## Description

In logic, an implication (or material conditional) states that If p is true, q should be true too.

We can express the result of any implication of two statements as a logical table:

```
p\q T F
T   T F
F   T T
```

In this kata, we will take that further. Given an array (return false if the array is empty), assume that from first to last item in the array, each implies the next (for example, in an array of three items, p, q, and r: (p->q)->r. Return the boolean answer.

Assume that there will be no more than 8 variables in the array, and the array will contain only boolean values.

## My Solution

**JavaScript**

```js
const multImplication = (arr) => (arr.length ? arr.reduce((acc, cur) => !acc || cur, true) : null);
```

### User Solution

**JavaScript**

```js
function multImplication(arr) {
  var len = arr.length;
  if (len === 0) return null;

  var i;
  var answer = true;
  for (i = 0; i < len; i++) {
    if (answer && arr[i] === false) {
      answer = false;
    } else {
      answer = true;
    }
  }
  return answer;
}
```
