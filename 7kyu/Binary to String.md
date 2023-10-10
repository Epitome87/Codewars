# [Binary to String](https://www.codewars.com/kata/5ab3495595df9ec78f0000b4)

## Description

Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, and it has something important to tell you. Write a function which will receive a long string of binary code and convert it to a string. Remember, in Python binary output starts with '0b'.

As an example: `binary_to_string('0b10000110b11000010b1110100') == 'Cat'`

Input may consist of upper and lower case letters and numbers, in binary form of course, as well as special symbols. The input to your function will always be one string of binary.

## My Solution

**JavaScript**

```js
const binaryToString = (binary) =>
  binary
    .split('0b')
    .slice(1)
    .map((c) => String.fromCharCode(parseInt(c, 2)))
    .join('');
```

```js
const binaryToString = (binary) =>
  binary
    .split('0b')
    .slice(1)
    .reduce((acc, cur) => acc + String.fromCharCode(parseInt(cur, 2)), '');
```

### User Solution

**JavaScript**

```js
const binaryToString = (binary) => String.fromCharCode(...binary.split(/(?=0b)/));
```

## Takeaways

1. When an integer is in the format of '0b' followed by a binary string, we can simply pass it into `Number()` and have it convert to a decimal integer.
2. Similiary, if we have just the string representation of a binary number, without the '0b' prefix, we can convert to a decimal with `parseInt(binaryString, 2)`.
