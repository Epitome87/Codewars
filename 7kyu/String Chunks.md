# [String Chunks](https://www.codewars.com/kata/55b4f9906ac454650900007d)

## Description

You should write a function that takes a string and a positive integer n, splits the string into parts of length n and returns them in an array. It is ok for the last element to have less than n characters.

If n is not a number or not a valid size (> 0) (or is absent), you should return an empty array.

If n is greater than the length of the string, you should return an array with the only element being the same string.

Examples:

```js
stringChunk('codewars', 2); // ['co', 'de', 'wa', 'rs']
stringChunk('thiskataeasy', 4); // ['this', 'kata', 'easy']
stringChunk('hello world', 3); // ['hel', 'lo ', 'wor', 'ld']
stringChunk('sunny day', 0); // []
```

## My Solution

**JavaScript**

```js
const stringChunk = (str, n) => (n > 0 ? str.match(new RegExp(`.{1,${n}}`, 'g')) : []);
```

### User Solution

**JavaScript**

```js
function stringChunk(str, n) {
  var a = [];
  for (var i = 0; n > 0 && i < str.length; i += n) {
    a.push(str.substring(i, i + n));
  }
  return a;
}
```
