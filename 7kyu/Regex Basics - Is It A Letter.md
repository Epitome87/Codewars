# [Regex Basics - Is it a Letter?](https://www.codewars.com/kata/567de72e8b3621b3c300000b)

## Description

Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

## My Solution

**JavaScript**

```js
String.prototype.isLetter = function () {
  return /^[a-z]$/i.test(this);
};
```

**Python**

```py
import re

def is_letter(s):
    return re.fullmatch("[a-z]", s, re.I) != None
```
