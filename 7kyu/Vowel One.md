# [Vowel One](https://www.codewars.com/kata/580751a40b5a777a200000a1)

## Description

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

    vowelOne "abceios" -- "1001110"

    vowelOne "aeiou, abc" -- "1111100100"

## My Solution

**JavaScript**

```js
const vowelOne = (s) =>
  s
    .split('')
    .map((c) => (/[aeiou]/i.test(c) ? '1' : '0'))
    .join('');
```

```js
const vowelOne = (s) => s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
```

**Python**

```py
def vowel_one(s):
    return ''.join('1' if c in 'aeiouAEIOU' else '0' for c in s)
```
