# [Negative Connotation](https://www.codewars.com/kata/5ef0456fcd067000321baffa)

## Description

You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

```
"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false
```

## My Solution

**JavaScript**

```js
const connotation = (str) =>
  str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((acc, curr) => acc + (/[a-m]/i.test(curr[0]) ? 1 : -1), 0) >= 0;
```

```js
const connotation = (str) =>
  str.split(' ').reduce((acc, curr) => acc + (curr === '' ? 0 : /[a-m]/i.test(curr[0]) ? 1 : -1), 0) >= 0;
```

### User Solution

**JavaScript**

```js
function connotation(str) {
  let positiveMatches = str.match(/\b[a-m]/gi) || [];
  let negativeMatches = str.match(/\b[n-z]/gi) || [];
  return positiveMatches.length >= negativeMatches.length;
}
```
