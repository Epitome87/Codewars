# [Character with Longest Consecutive Repetition](https://www.codewars.com/kata/586d6cefbcc21eed7a001155)

## Description

For a given string `s` find the character `c` (or `C`) with longest consecutive repetition and return:

```
[c, l]
```

where `l` (or `L`) is the length of the repetition. If there are two or more characters with the same `l` return the first in order of appearance.

For empty string return:

```
["", 0]
```

## My Solution

```js
const longestRepetition = (s) =>
  (s.match(/(.)\1*/g) || []).reduce((acc, cur) => (cur.length > acc[1] ? [cur[0], cur.length] : acc), ['', 0]);
```

```js
const longestRepetition = (s) => {
  if (!s) return ['', 0];
  const matches = s.match(/(.)\1*/g).map((n) => [n[0], n.length]);
  const sorted = matches.sort((a, b) => b[1] - a[1]);
  return sorted[0];
};
```

**Python**

```py
def longest_repetition(chars):
    prev_letter, count, result = 0, "", ["", 0]

    for c in chars:
        count = count + 1 if c == prev_letter else 1
        if count > result[1]:
            result[1], result[0] = count, c
        prev_letter = c

    return tuple(result)
```

### User Solution

**Python**

```py
import re

def longest_repetition(chars):
    if not chars: return ("", 0)

    longest = max(re.findall(r"((.)\2*)", chars), key=lambda x: len(x[0]))
    return (longest[1], len(longest[0]))
```
