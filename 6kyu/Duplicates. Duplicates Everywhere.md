# [Duplicates. Duplicates Everywhere.](https://www.codewars.com/kata/5e8dd197c122f6001a8637)

## Description

You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

```js
{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}
```

Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

```js
{
  "1": ["C"],
  "2": ["A", "B", "D"],
}
```

**Rules**

- Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
- If duplicate characters are found in the same array, the first occurance should be kept.

**Example 1**

```js
input = {
  1: ['C', 'F', 'G'],
  2: ['A', 'B', 'C'],
  3: ['A', 'B', 'D'],
};

output = {
  1: ['F', 'G'],
  2: ['C'],
  3: ['A', 'B', 'D'],
};
```

**Example 2**

```js
input = {
  1: ['A'],
  2: ['A'],
  3: ['A'],
};

output = {
  1: [],
  2: [],
  3: ['A'],
};
```

**Example 3**

```js
input = {
  432: ['A', 'A', 'B', 'D'],
  53: ['L', 'G', 'B', 'C'],
  236: ['L', 'A', 'X', 'G', 'H', 'X'],
  11: ['P', 'R', 'S', 'D'],
};

output = {
  11: ['P', 'R', 'S'],
  53: ['C'],
  236: ['L', 'X', 'G', 'H'],
  432: ['A', 'B', 'D'],
};
```

## My Solution

**JavaScript**

```js
const removeDuplicateIds = (obj) => {
  const dupeMap = new Map();
  return Object.entries(obj)
    .sort((a, b) => +b[0] - +a[0])
    .reduce((acc, [key, value]) => {
      let uniques = value.filter((el, i) => i === value.indexOf(el) && !dupeMap.has(el));
      uniques.forEach((val) => dupeMap.set(val, true));
      return { ...acc, [key]: uniques };
    }, {});
};
```

```js
const removeDuplicateIds = (obj) => {
  const dupeCache = {};
  const result = Object.assign({}, obj);
  const sortedTable = Object.entries(obj).sort((a, b) => +b[0] - +a[0]);

  for (let [key, value] of sortedTable) {
    let uniques = value.filter((el, i) => i === value.indexOf(el) && !dupeCache[el]);
    result[key] = uniques;

    for (const unique of uniques) dupeCache[unique] = true;
  }

  return result;
};
```
