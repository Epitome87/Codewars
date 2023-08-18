# [Regex Basics - Is It A Six Bit Unsigned Number?](https://www.codewars.com/kata/567e8dbb9b6f4da558000030)

## Description

Implement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.

## My Solution

**JavaScript**

```js
String.prototype.sixBitNumber = function () {
  return /^(\d|[1-5][0-9]|[6][0-3])$/.test(this);
};
```

### User Solution

**JavaScript**

```js
String.prototype.sixBitNumber = function () {
  return /^([1-5]?\d|6[0-3])$/g.test(this);
};
```
