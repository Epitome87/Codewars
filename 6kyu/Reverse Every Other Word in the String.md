# [Reverse Every Other Word in the String](https://www.codewars.com/kata/58d76854024c72c3e20000de)

## Description

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

## My Solution

**JavaScript**

```js
const reverse = (str) =>
  str
    .trim()
    .split(' ')
    .map((v, i) => (i % 2 ? [...v].reverse().join('') : v))
    .join(' ');
```
