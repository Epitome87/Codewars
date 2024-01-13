# [Regexp Basics - Is it a Vowel?](https://www.codewars.com/kata/567bed99ee3451292c000025)

## Description

Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

## My Solution

**JavaScript**

```js
String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
};
```

```js
String.prototype.vowel = function () {
  return this.length === 1 && /[aeiou]/i.test(this.valueOf());
};
```

**Python**

```py
import re

def is_vowel(s):
    return re.fullmatch("[aeiou]", s, re.IGNORECASE) != None
```
