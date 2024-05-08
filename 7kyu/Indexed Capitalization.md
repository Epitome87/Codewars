# [Indexed Capitalization](https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1)

## Description

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

- `capitalize("abcdef",[1,2,5]) = "aBCdeF"`
- `capitalize("abcdef",[1,2,5,100]) = "aBCdeF"`. There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

## My Solution

**JavaScript**

```js
const capitalize = (str, arr) => [...str].map((c, idx) => (arr.includes(idx) ? c.toUpperCase() : c)).join('');
```

**Python**

```py
def capitalize(s, ind):
    return ''.join([c.upper() if idx in ind else c for idx, c in enumerate(s)])
```
