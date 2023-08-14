# [Simple String Division](https://www.codewars.com/kata/5b83c1c44a6acac33400009a)

## Description

In this Kata, you will be given a number in form of a string and an integer `k` and your task is to insert `k` commas into the string and determine which of the partitions is the largest.

For example:

```
solve('1234',1) = 234 because ('1','234') or ('12','34') or ('123','4').
solve('1234',2) = 34 because ('1','2','34') or ('1','23','4') or ('12','3','4').
solve('1234',3) = 4
solve('2020',1) = 202
```

More examples in test cases. Good luck!

Please also try [Simple remove duplicates](https://www.codewars.com/kata/5ba38ba180824a86850000f7)

## My Solution

**JavaScript**

```js
// Shorter solution than the previous, BUT substr is deprecated! Do not use in a real project!
const solve = (str, k) => Math.max(...[...str].map((_, i) => str.substr(i, str.length - k)));
```

```js
const solve = (str, k) => Math.max(...[...str].map((_, i) => str.slice(i, i + str.length - k)));
```

```js
const solve = (str, k) =>
  [...str].reduce((acc, cur, idx) => (((val = +str.slice(idx, idx + str.length - k)), val) > acc ? val : acc), 0);
```

```js
const solve = (str, k) => {
  let maxValue = 0;

  for (let i = 0; i < str.length; i++) {
    const value = +str.slice(i, i + str.length - k);
    if (value > maxValue) maxValue = value;
  }

  return maxValue;
};
```

### User Solution

**JavaScript**

```js
function solve(str, k) {
  for (var i = 0, n = str.length - k, max = 0; i < n + k; i++) max = Math.max(max, +str.substr(i, n));
  return max;
}
```
