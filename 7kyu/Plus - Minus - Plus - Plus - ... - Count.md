# [Plus - Minus - Plus - Plus - ... - Count](https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca)

## Description

Count how often sign changes in array.

**Result**

number from `0` to ... . Empty array returns `0`

**Example**

    const arr = [1, -3, -4, 0, 5];

    | elem | count |
    |------|-------|
    |  1   |  0    |
    | -3   |  1    |
    | -4   |  1    |
    |  0   |  2    |
    |  5   |  2    |

    catchSignChange(arr) == 2;

## My Solution

**JavaScript**

```js
const catchSignChange = (arr) => arr.slice(1).reduce((acc, cur, i) => acc + (cur < 0 !== arr[i] < 0), 0);
```

```js
const catchSignChange = (arr) =>
  arr
    .slice(0, -1)
    .reduce((count, cur, idx) => (Math.sign(cur || 1) !== Math.sign(arr[idx + 1] || 1) ? count + 1 : count), 0);
```

```js
const catchSignChange = (arr) =>
  arr.reduce(
    (count, cur, idx) => ((cur >= 0 && arr[idx + 1] < 0) || (cur < 0 && arr[idx + 1] >= 0) ? count + 1 : count),
    0
  );
```

### User Solution

**JavaScript**

```js
const catchSignChange = (arr) => arr.slice(1).filter((e, i) => e < 0 !== arr[i] < 0).length;
```
