# [Scramblies](https://www.codewars.com/kata/55c04b4cc56a697bb0000048)

## Description

Complete the function `scramble(str1, str2)` that returns `true` if a portion of str1 characters can be rearranged to match str2, otherwise returns `false`.

Notes:

- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered.

**Examples**

```
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
```

## My Solution

**JavaScript**

```js
const scramble = (str1, str2) => {
  const map = [...str1].reduce((acc, cur, idx) => {
    if (idx < str2.length) acc[str2[idx]] = (acc[str2[idx]] || 0) - 1;
    return (acc[cur] = (acc[cur] || 0) + 1), acc;
  }, {});

  return Object.values(map).every((v) => v >= 0);
};
```

```js
const scramble = (str1, str2) => {
  const obj1 = [...str1].reduce((acc, cur) => ((acc[cur] = ++acc[cur] || 1), acc), {});
  const obj2 = [...str2].reduce((acc, cur) => ((acc[cur] = ++acc[cur] || 1), acc), {});
  return Object.keys(obj2).every((n) => obj1[n] >= obj2[n]);
};
```

**Python**

```py
def scramble(s1, s2):
    map1 = {}
    map2 = {}

    for c in s1:
        map1[c] = map1.get(c, 0) + 1

    for c in s2:
        map2[c] = map2.get(c, 0) + 1

    return all(map1.get(x, 0) >= map2[x] for x in map2)
```

### User Solution

**JavaScript**

```js
const scramble = (str1, str2) => [...str2].every((val) => str2.split(val).length <= str1.split(val).length);
```

**Python**

```py
from collections import Counter

def scramble(s1, s2):
    return Counter(s2) <= Counter(s1)
```
