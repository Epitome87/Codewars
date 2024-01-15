# [Are There Doubles?](https://www.codewars.com/kata/56a24b4d9f3671584d000039)

## Description

Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or .

You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

Examples:

```js
doubleCheck('abca'); //returns false
doubleCheck('aabc'); //returns true
doubleCheck('a 11 c d'); //returns true
doubleCheck('AabBcC'); //returns true
doubleCheck('a b  c'); //returns true
doubleCheck('a b c d e f g h i h k'); //returns false
doubleCheck('2020'); //returns false
doubleCheck('a!@€£#$%^&*()_-+=}]{[|"\':;?/>.<,~'); //returns false
```

## My Solution

**JavaScript**

```js
const doubleCheck = (str) => /(.)\1/i.test(str);
```

```js
const doubleCheck = (str) =>
  str
    .toLowerCase()
    .split('')
    .some((x, i, a) => a[i + 1] === x);
```

```js
const doubleCheck = (str) => {
  str = str.toLowerCase();
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }
  return false;
};
```

**Python**

```py
import re

def double_check(string):
    return re.search(r"(.)\1", string, flags=re.I) != None
```

### User Solution

**Python**

```py
# Clever, but doesn't use Regex
def double_check(s): return any(i * 2 in s.lower() for i in s)
```
