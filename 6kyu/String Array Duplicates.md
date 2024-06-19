# [String Array Duplicates](https://www.codewars.com/kata/59f08f89a5e129c543000069)

## Description

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

- `dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]`.
- `dup(["kelless","keenness"]) = ["keles","kenes"]`.

Strings will be lowercase only, no spaces. See test cases for more examples.

## My Solution

**JavaScript**

```js
const dup = (s) => s.map((v) => v.replace(/(.)\1+/g, '$1'));
```

```js
const dup = (s) =>
  s.map((str) => [...str].reduce((acc, curr, idx, arr) => (curr !== arr[idx + 1] ? acc + curr : acc), ''));
```

**Python**

```py
from re import sub

def dup(arry):
    return [sub(r"(.)\1+", lambda match: match[1], s) for s in arry]
```

### User Solution

**Python**

```py
import re

def dup(arry):
    return list(map(lambda s: re.sub(r'(\w)\1+', r'\1', s), arry))
```
