# [String Matchup](https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4)

## Description

Given two arrays of strings, return the number of times each string of the second array appears in the first array.

**Example**

```js
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw'];
array2 = ['abc', 'cde', 'uap'];
```

How many times do the elements in `array2` appear in `array1`?

- `'abc' `appears twice in the first array (2)
- `'cde'` appears only once (1)
- `'uap'` does not appear in the first array (0)

Therefore, `solve(array1, array2)` = `[2, 1, 0]`

## My Solution

**JavaScript**

```js
const solve = (a, b) => b.reduce((acc, cur) => acc.concat(a.filter((v) => v === cur).length), []);
```

```js
const solve = (a, b) => {
  const map = {};
  for (let el of a) {
    map[el] = 1 + (map[el] || 0);
  }
  return b.map((n) => (n in map ? map[n] : 0));
};
```

```js
const solve = (a, b) => b.map((x) => a.reduce((acc, cur) => (cur === x ? acc + 1 : acc), 0));
```

**Python**

```py
def solve(a, b):
    return [a.count(x) for x in b]
```

### User Solution

**Python**

```py
from collections import Counter

def solve(a, b):
    counter = Counter(a)
    return [counter[s] for s in b]
```
