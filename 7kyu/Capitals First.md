# [Capitals First!](https://www.codewars.com/kata/55c353487fe3cc80660001d4)

## Description

Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

## My Solution

**JavaScript**

```js
const capitalsFirst = (str) => {
  const lowercases = str.split(' ').filter((word) => /^[a-z]/.test(word));
  const capitals = str.split(' ').filter((word) => /^[A-Z]/.test(word));
  return [...capitals, ...lowercases].join(' ');
};
```
