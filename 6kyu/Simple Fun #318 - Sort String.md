# [Simple Fun #318: Sort String](https://www.codewars.com/kata/5936256f2e2a27edc9000047)

## Description

Your task is to sort the characters in a string according to the following rules:

```
- Rule1: English alphabets are arranged from A to Z, case insensitive.
  ie. "Type" --> "epTy"
- Rule2: If the uppercase and lowercase of an English alphabet exist
  at the same time, they are arranged in the order of oringal input.
  ie. "BabA" --> "aABb"
- Rule3: non English alphabet remain in their original position.
  ie. "By?e" --> "Be?y"
```

**Input/Output**

[input] string s

A non empty string contains any characters(English alphabets or non English alphabets).

[output] a string

A sorted string according to the rules above.

**Example**

For s = "cba", the output should be "abc".

For s = "Cba", the output should be "abC".

For s = "cCBbAa", the output should be "AaBbcC".

For s = "c b a", the output should be "a b c".

For s = "-c--b--a-", the output should be "-a--b--c-".

For s = "Codewars", the output should be "aCdeorsw".

## My Solution

**JavaScript**

```js
const sortString = (s) => {
  const alphaSorted = [...s]
    .filter((char) => /[a-z]/i.test(char))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  const nonAlpha = [...s].filter((char) => /[^a-z]/i.test(char));
  return [...s].reduce((acc, cur) => acc + (/[a-z]/i.test(cur) ? alphaSorted.shift() : nonAlpha.shift()), '');
};
```

```js
const sortString = (s) => {
  const alpha = [...s].filter((char) => /[a-z]/i.test(char));
  const nonAlpha = [...s].filter((char) => /[^a-z]/i.test(char));
  const alphaSorted = alpha.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/i.test(s[i])) result.push(alphaSorted.shift());
    else result.push(nonAlpha.shift());
  }

  return result.join('');
};
```
