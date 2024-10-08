# [Ordered Count of Characters](https://www.codewars.com/kata/57a6633153ba33189e000074)

## Description

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

```js
orderedCount('abracadabra') ==
  [
    ['a', 5],
    ['b', 2],
    ['r', 2],
    ['c', 1],
    ['d', 1],
  ];
```

## My Solution

**JavaScript**

```js
const orderedCount = (text) => [...[...text].reduce((acc, cur) => acc.set(cur, acc.get(cur) + 1 || 1), new Map())];
```

```js
const orderedCount = (str) => [...new Set([...str])].map((char) => [char, str.split(char).length - 1]);
```

```js
const orderedCount = (text) => {
  const uniques = text.split('').filter((c, index) => text.indexOf(c) === index);
  return uniques.map((letter) => [letter, text.split(letter).length - 1]);
};
```

**Python**

```py
from collections import Counter

def ordered_count(inp):
    c = Counter(inp)
    return sorted(c.items(), key=lambda x: inp.index(x[0]))
```

### User Solution

**Python**

```py
from collections import Counter

def ordered_count(input):
    return list(Counter(input).items())
```

## Takeaways

1. The `indexOf()` method is useful when we only want to keep the first occurrence of a character.
2. The `split()` method is useful when we want to count the occurrence of the character we are splitting by.
   Example: If you split 'bob is a blob' by 'b', we get: ["","o"," is a ","lo",""]. Note how the number of times 'b' occurs is the length of this split array minus one.
