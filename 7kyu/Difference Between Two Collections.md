# [Difference Between Two Colletions](https://www.codewars.com/kata/594093784aafb857f0000122)

## Description

Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

**Example**

```js
A = [a, a, t, e, f, i, j];

B = [t, g, g, i, k, f];

difference = [a, e, g, j, k];
```

## My Solution

**JavaScript**

```js
const diff = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);
  const result = [];

  for (let el of setA) {
    if (!setB.has(el)) result.push(el);
  }

  for (let el of setB) {
    if (!setA.has(el)) result.push(el);
  }

  return result.sort();
};
```

### User Solution

**JavaScript**

```js
const diff = (a, b) => [...new Set([...a, ...b].filter((val) => a.includes(val) ^ b.includes(val)))].sort();
```
