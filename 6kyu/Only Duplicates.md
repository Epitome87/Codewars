# [Only Duplicates](https://www.codewars.com/kata/5a1dc4baffe75f270200006b)

## Description

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

## My Solution

**JavaScript**

```js
const onlyDuplicates = (str) => [...str].filter((el) => str.indexOf(el) !== str.lastIndexOf(el)).join('');
```

### User Solution

**JavaScript**

```js
const onlyDuplicates = (s) => s.replace(/./g, (c) => (s.indexOf(c) == s.lastIndexOf(c) ? '' : c));
```
