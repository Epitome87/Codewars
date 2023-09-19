# [Are They Opposite?](https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7)

## Description

Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)

```
"ab","AB" -> true
"aB","Ab" -> true
"aBcd","AbCD" -> true
"AB","Ab" -> false
"","" -> false
```

## My Solution

**JavaScript**

```js
const isOpposite = (s1, s2) =>
  s1.length === s2.length &&
  `${s1}${s2}` !== '' &&
  [...s1].every((c, i) => Math.abs(c.charCodeAt(0) - s2[i].charCodeAt(0)) === 32);
```

```js
const isOpposite = (s1, s2) => {
  if (s1.length !== s2.length || !s1.length || !s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    if (Math.abs(s1[i].charCodeAt() - s2[i].charCodeAt()) !== 32) return false;
  }
  return true;
};
```
