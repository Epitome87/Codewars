# [Longest Vowel Chain](https://www.codewars.com/kata/59c5f4e9d751df43cf000035)

## Description

The vowel substrings in the word codewarriors are o, e, a, i and o. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

## My Solution

**JavaScript**

```js
const solve = (s) => Math.max(...s.match(/[aeiou]+/gi).map((n) => n.length));
```

**Python**

```py
def solve(str):
    currentLength = 0
    maxLength = 0

    for char in str:
        if char not in 'aeiou':
            currentLength = 0
        else:
            currentLength += 1
            if currentLength > maxLength:
                maxLength = currentLength

    return maxLength
```

### User Solution

**Python**

```py
import re
def solve(s):
  return len(max(re.findall(r"[aeiou]+", s), key=len, default=""))
```
