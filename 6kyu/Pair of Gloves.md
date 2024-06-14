# [Pair of Gloves](https://www.codewars.com/kata/58235a167a8cb37e1a0000db)

## Description

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:

```
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
```

## My Solution

**JavaScript**

```js
const numberOfPairs = (gloves) => {
  const gloveSet = new Set();
  let result = 0;

  for (let glove of gloves) {
    if (gloveSet.has(glove)) {
      result++;
      gloveSet.delete(glove);
    } else gloveSet.add(glove);
  }

  return result;
};
```

```js
const numberOfPairs = (gloves) => {
  const gloveCount = gloves.reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {});
  return Object.values(gloveCount).reduce((sum, cur) => sum + Math.floor(cur / 2), 0);
};
```

```js
const numberOfPairs = (gloves) => {
  const gloveCount = {};

  for (let glove of gloves) {
    gloveCount[glove] = gloveCount[glove] ? gloveCount[glove] + 1 : 1;
  }

  return Object.values(gloveCount).reduce((sum, cur) => sum + Math.floor(cur / 2), 0);
};
```

**Python**

```py
def number_of_pairs(gloves):
    glove_set = set()
    num_pairs = 0

    for glove in gloves:
        if glove in glove_set:
            num_pairs += 1
            glove_set.remove(glove)
        else:
            glove_set.add(glove)

    return num_pairs
```

### User Solution

**Python**

```py
def number_of_pairs(gloves):
    return sum(gloves.count(color) // 2 for color in set(gloves))
```
