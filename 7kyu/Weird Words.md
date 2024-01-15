# [Weird Words](https://www.codewars.com/kata/https://www.codewars.com/kata/57b2020eb69bfcbf64000375)

## Description

Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:

- Spaces and special characters should remain the same.
- Capital letters should transfer in the same way but remain capitilized.

Examples

```
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
```

## My Solution

**JavaScript**

```js
const nextLetter = (str) => {
  return str.replace(/[a-z]/gi, (c) => {
    const offset = /[a-z]/.test(c) ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) + 1 - offset) % 26) + offset);
  });
};
```

**Python**

```py
import re

def next_letter(s):
    return re.sub("[a-z]", lambda m: chr(ord(m[0]) + (-25 if re.search("[zZ]", m[0]) else 1)), s, 0, re.I)
```

### User Solution

**JavaScript**

```js
const nextLetter = (str) =>
  str.replace(/[a-z]/gi, (m) => String.fromCharCode(m.charCodeAt(0) + (/z/i.test(m) ? -25 : 1)));
```

**Python**

```py
# Clever, but doesn't use Regex
def next_letter(string):
    return "".join(chr(ord(c)+(-25 if c in 'zZ' else 1)) if c.isalpha() else c for c in string)
```

## Takeaways

1. We really only need to check if current character is a z or Z, then add extra logic. However, I prefer my logic, as it's more flexible!
