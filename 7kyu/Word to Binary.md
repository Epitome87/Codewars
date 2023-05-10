# [Word to Binary](https://www.codewars.com/kata/59859f435f5d18ede7000050)

## Description

Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]

## My Solution

**JavaScript**

```js
const wordToBin = (str) => [...str].map((el) => el.charCodeAt(0).toString(2).padStart(8, '0'));
```

### User Solution

**JavaScript**

```js
function wordToBin(str) {
  return Array.from(str, (c) => '0' + c.charCodeAt(0).toString(2));
}
```
