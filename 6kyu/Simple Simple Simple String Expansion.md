# [Simple Simple Simple String Expansion](https://www.codewars.com/kata/5ae326342f8cbc72220000d2)

## Description

Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string.

**Notes**

- The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
- If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
- Empty strings should return an empty string.
  Your code should be able to work for both lower and capital case letters.

```
"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string
```

## My Solution

**JavaScript**

```js
const stringExpansion = (s) => (
  (prevNum = 1), [...s].map((c) => (/\d/.test(c) ? ((prevNum = c), '') : c.repeat(prevNum))).join('')
);
```

```js
const stringExpansion = (s) => {
  let prevNum = 1;
  return [...s].reduce((acc, cur) => {
    if (/\d/.test(cur)) {
      prevNum = cur;
      return acc;
    }
    return acc + cur.repeat(prevNum);
  }, '');
};
```

```js
const stringExpansion = (s) => {
  let prevNum = 1;
  let result = '';

  for (let char of s) {
    if (/[0-9]/.test(char)) prevNum = char;
    else result += char.repeat(prevNum);
  }

  return result;
};
```
