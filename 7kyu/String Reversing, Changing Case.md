# [String Reversing, Changing Case](https://www.codewars.com/kata/58305403aeb69a460b00019a)

## Description

Given 2 string parameters, show a concatenation of:

- the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
- a separator in between both strings: @@@
- the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER

** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**

## My Solution

**JavaScript**

```js
const reverseAndMirror = (s1, s2) => {
  const invertCase = (str) => [...str].map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join('');
  const a = [...invertCase(s2)].reverse().join('');
  const b = [...invertCase(s1)].reverse().join('') + invertCase(s1);
  return `${a}@@@${b}`;
};
```
