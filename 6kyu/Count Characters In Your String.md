# [Count Characters in Your String](https://www.codewars.com/kata/52efefcbcdf57161d4000091)

## Description

The main idea is to count all the occurring characters in a string. If you have a string like `aba`, then the result should be `{'a': 2, 'b': 1}`.

What if the string is empty? Then the result should be empty object literal, `{}`.

## My Solution

**JavaScript**

```js
const count = (string) => [...string].reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
```

```js
const count = (string) => {
  const characterOccurence = {};

  for (let character of string) {
    characterOccurence[character] ? characterOccurence[character]++ : (characterOccurence[character] = 1);
  }

  return characterOccurence;
};
```

**Python**

```py
def count(s):
    count = {}
    for char in s:
        count[char] = count.get(char, 0) + 1
    return count
```

### User Solution

**JavaScript**

```js
const count = (string) => [...string].reduce((pre, val) => ((pre[val] = -~pre[val]), pre), {});
```

**Python**

```py
def count(s):
    return {x:s.count(x) for x in set(s)}
```

```py
from collections import Counter

def count(string):
    return Counter(string)
```

## Takeaways

1. In the user solution, `-~pre[val]` works as follows:

```
bitwise not / unary negation
~2 -> -3
-~2 -> 3

-~undefined -> 1
```
