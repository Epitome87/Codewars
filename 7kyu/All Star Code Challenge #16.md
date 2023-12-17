# [All Star Code Challenge #16](https://www.codewars.com/kata/586566b773bd9cbe2b000013)

## Description

This Kata is intended as a small challenge for my students

All Star Code Challenge #16

Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

```js
noRepeat('aabbccdde'); // => "e"
noRepeat('wxyz'); // => "w"
noRepeat('testing'); // => "e"
```

Note: ONLY letters from the english alphabet will be used as input There will ALWAYS be at least one non-repeating letter in the input string

## My Solution

**JavaScript**

```js
const noRepeat = (str) => [...str].find((v) => str.indexOf(v) === str.lastIndexOf(v));
```

```js
const noRepeat = (str) => {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
};
```

### User Solution

**JavaScript**

```js
function noRepeat(str) {
  for (var i of str) if (str.split(i).length == 2) return i;
}
```
