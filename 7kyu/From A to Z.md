# [From A to Z](https://www.codewars.com/kata/6512b3775bf8500baea77663)

## Description

Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

**Examples**

```
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"
```

**Notes**

- A hyphen will separate the two letters in the string.
- You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).

## My Solution

**JavaScript**

```js
const gimmeTheLetters = (sp) => {
  const [start, end] = sp.split('-').map((x) => x.charCodeAt(0));
  return Array.from({ length: end - start + 1 }, (_, i) => String.fromCharCode(i + start)).join('');
};
```

```js
const gimmeTheLetters = (sp) => {
  let s = '';
  for (let i = sp[0].charCodeAt(); i <= sp[2].charCodeAt(); i++) s += String.fromCharCode(i);
  return s;
};
```

```js
const gimmeTheLetters = (sp) => {
  const [start, end] = sp.split('-').map((x) => x.charCodeAt(0));

  const result = '';
  for (let i = start; i <= end; i++) {
    result += String.fromCharCode(i);
  }

  return result;
};
```

### User Solution

**JavaScript**

```js

```
