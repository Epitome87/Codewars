# [Interweaving Strings and Removing Digits](https://www.codewars.com/kata/588a7d45019c42be61000009)

## Description

Your friend Rick is trying to send you a message, but he is concerned that it would get intercepted by his partner. He came up with a solution:

1. Add digits in random places within the message.
2. Split the resulting message in two. He wrote down every second character on one page, and the remaining ones on another. He then dispatched the two messages separately.

Write a function interweave(s1, s2) that reverses this operation to decode his message!

Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"

Rick's a bit peculiar about his formats. He would feel ashamed if he found out his message led to extra white spaces hanging around the edges of his message...

## My Solution

**JavaScript**

```js
const interweave = (s1, s2) =>
  [...s1, ...s2]
    .reduce((acc, _, i, arr) => acc + (i % 2 ? arr[Math.ceil(s1.length - 1 + i / 2)] : arr[i / 2]), '')
    .replace(/\d/g, '');
```

```js
const interweave = (s1, s2) => {
  const str1Arr = [...s1];
  const str2Arr = [...s2];
  return [...s1, ...s2].reduce((acc, _, i) => acc + (i % 2 ? str2Arr.shift() : str1Arr.shift()), '').replace(/\d/g, '');
};
```

```js
const interweave = (s1, s2) => {
  const str1Arr = s1.split('');
  const str2Arr = s2.split('');
  let result = '';

  while (str1Arr.length || str2Arr.length) {
    if (str1Arr.length) result += str1Arr.shift();
    if (str2Arr.length) result += str2Arr.shift();
  }

  return result.replace(/\d/g, '');
};
```

### User Solution

**JavaScript**

```js
const interweave = (s1, s2) =>
  s1
    .replace(/(?<=.)/g, (_, idx) => s2[--idx] || ``)
    .replace(/\d/g, ``)
    .trim();
```
