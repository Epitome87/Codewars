# [Move All Vowels](https://www.codewars.com/kata/56bf3287b5106eb10f000899)

## Description

Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

**Examples**

```
"day"    ==>  "dya"
"apple"  ==>  "pplae"
```

## My Solution

**JavaScript**

```js
const moveVowel = (input) =>
  [...input].reduce((acc, curr) => acc + (/[aeiou]/.test(curr) ? curr : ''), input.replace(/[aeiou]/g, ''));
```

```js
const moveVowel = (input) => input.replace(/[aeiou]/g, '') + [...input].filter((el) => /[aeiou]/g.test(el)).join('');
```

```js
const moveVowel = (input) => {
  const vowels = [...input].filter((el) => /[aeiou]/g.test(el));
  const consonants = [...input].filter((el) => /[^aeiou]/g.test(el));
  return consonants.join('') + vowels.join('');
};
```

### User Solution

**JavaScript**

```js
const moveVowel = ($) => $.replace(/[aeiou]/g, '') + $.replace(/[^aeiou]/g, '');
```
