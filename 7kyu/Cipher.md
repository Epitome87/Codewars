# [Cipher](https://www.codewars.com/kata/5a19701d80171fd71d000029)

## Description

This cipher involves taking each character of a string and multiplying their char codes by 6.

For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

You must write two functions:

- `encode` to encode a given string,
- `decode` to decode a given string.

## My Solution

**JavaScript**

```js
const encode = (str) => [...str].reduce((acc, cur) => acc + String.fromCharCode(cur.charCodeAt() * 6), '');
const decode = (str) => [...str].reduce((acc, cur) => acc + String.fromCharCode(cur.charCodeAt() / 6), '');
```
