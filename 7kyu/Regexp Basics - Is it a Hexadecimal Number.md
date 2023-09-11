# [Regexp Basics - Is it a Hexadecimal Number?](https://www.codewars.com/kata/)

## Description

Implement String#hex_number? (in Java StringUtils.isHexNumber(String)), which should return true if given object is a hexadecimal number, false otherwise.

Hexadecimal numbers consist of one or more digits from range 0-9 A-F (in any case), optionally prefixed by 0x.

## My Solution

**JavaScript**

```js
String.prototype.hexNumber = function () {
  return /^(0x)?[a-f0-9]+$/i.test(this);
};
```