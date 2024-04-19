# [Exclamation Marks Series #1: Remove an Exclamation Mark from End of String](https://www.codewars.com/kata/57fae964d80daa229d000126)

## Description

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

**Examples**

```js
remove('Hi!') == 'Hi';
remove('Hi!!!') == 'Hi!!';
remove('!Hi') == '!Hi';
remove('!Hi!') == '!Hi';
remove('Hi! Hi!') == 'Hi! Hi';
remove('Hi') == 'Hi';
```

## My Solution

**JavaScript**

```js
const remove = (str) => str.replace(/!$/, '');
```

```js
const remove = (string) => (string.endsWith('!') ? string.slice(0, -1) : string);
```

**Python**

```py
from re import sub

def remove(s):
    return sub(r"!$", "", s)
```

### User Solution

**Python**

```js
def remove(s):
    return s.removesuffix('!')
```

```py
def remove(s):
    return s[:-1] if s.endswith('!') else s
```
