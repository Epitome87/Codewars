# [Character Concatenation](https://www.codewars.com/kata/55147ff29cd40b43c600058b)

## Description

Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

```js
charConcat('abcdef') == 'af1be2cd3';
charConcat('abc!def') == 'af1be2cd3'; // same result
```

## My Solution

**JavaScript**

```js
const charConcat = (str) =>
  [...str.slice(0, str.length / 2)].reduce((acc, cur, idx) => acc + `${cur}${str[str.length - idx - 1]}${idx + 1}`, '');
```

```js
const charConcat = (str) => {
  let res = '';
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    res += `${str[i]}${str[str.length - i - 1]}${i + 1}`;
  }
  return res;
};
```
