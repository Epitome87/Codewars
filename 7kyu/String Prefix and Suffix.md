# [String Prefix and Suffix](https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1)

## Description

In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

for example:

```
solve("abcd") = 0, because no prefix == suffix.
solve("abcda") = 1, because the longest prefix which == suffix is "a".
solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
solve("aa") = 1. You should not overlap the prefix and suffix.
solve("a") = 0. You should not overlap the prefix and suffix.
```

All strings will be lowercase and string lengths are 1 <= length <= 500

More examples in test cases. Good luck!

## My Solution

**JavaScript**

```js
const solve = (s) => {
  for (let i = (s.length / 2) ^ 0; i > 0; i--) if (s.slice(0, i) === s.slice(-i)) return i;
  return 0;
};
```

### User Solution

**JavaScript**

```js
let solve = (s) => s.match(/^(.*).*\1$/)[1].length;
```
