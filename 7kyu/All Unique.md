# [All Unique](https://www.codewars.com/kata/553e8b195b853c6db4000048)

## Description

Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

## My Solution

**JavaScript**

```js
const hasUniqueChars = (str) => new Set(str).size === str.length;
```

```js
const hasUniqueChars = (str) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (res.includes(str[i])) return false;
    res += str[i];
  }

  return true;
};
```

### User Solution

**JavaScript**

```js
function hasUniqueChars(str) {
  return str.split('').every(function (v, i, arr) {
    return arr.indexOf(v) == i;
  });
}
```

```js
function hasUniqueChars(str) {
  return !/(.).*\1/.test(str);
}
```
