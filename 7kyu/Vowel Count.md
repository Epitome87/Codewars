# [Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

## Description

Return the number (count) of vowels in the given string.

We will consider `a`, `e`, `i`, `o`, `u` as vowels for this Kata (but not `y`).

The input string will only consist of lower case letters and/or spaces.

## My Solution

**JavaScript**

```js
const getCount = (str) => (str.match(/[aeiou]/gi) || []).length;
```

```js
const vowels = ['a', 'e', 'i', 'o', 'u'];
const getCount = (str) => str.split('').filter((char) => vowels.includes(char)).length;
```

**Python**

```py
import re

def get_count(sentence):
    return len(re.findall(r'[aeiou]', sentence, re.I))
```

### User Solution

**Python**

```py
def getCount(s):
    return sum(c in 'aeiou' for c in s)
```
