# [Consecutive Letters](https://www.codewars.com/kata/5ce6728c939bf80029988b57)

## Description

In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

```
Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example:
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
```

All inputs will be lowercase letters.

More examples in test cases. Good luck!

## My Solution

**JavaScript**

```js
const solve = (s) => {
  const set = [...new Set(s)];
  if (set.length !== s.length) return false;

  const sorted = [...set].sort();

  for (let i = 1; i < sorted.length; i++) {
    const charCode = sorted[i].charCodeAt(0);
    const prevCharCode = sorted[i - 1].charCodeAt(0);
    if (charCode !== prevCharCode - 1 && charCode !== prevCharCode + 1) return false;
  }

  return true;
};
```

### User Solution

**JavaScript**

```js
function solve(s) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}
```

```js
function solve(s) {
  const a = [...s].sort();
  return a.every((v, i) => i === 0 || v.charCodeAt(0) - a[i - 1].charCodeAt(0) === 1);
}
```
