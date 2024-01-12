# [Regexp Basics - Is it a Digit?](https://www.codewars.com/kata/567bf4f7ee34510f69000032)

## Description

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

## My Solution

**JavaScript**

```js
String.prototype.digit = function () {
  return /^\d$/.test(this);
};
```

**Python**

```py
import re

def is_digit(n):
    return bool(re.fullmatch(r"\d", n))
```

### User Solution

**Python**

```py
# Clever, but doesn't use Regex
def is_digit(n):
    return n.isdigit() and len(n)==1
```
