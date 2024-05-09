# [PPAP](https://www.codewars.com/kata/583c9a256e3994d1bf000638)

## Description

Take two arrays consisting of two strings in each array and combine them into one hyphen separated string. The first character of each word should be capitalized, no matter the input case. The word common to both arrays should appear as the first and last words in the new string.

Finally, the order of the final string should be the non-common word in the second array as the second word, and the non-common word in the first array as the 3rd word.

## My Solution

**JavaScript**

```js
const ppap = (arr1, arr2) => {
  const arr1Lower = arr1.map((word) => word.toLowerCase());
  const arr2Lower = arr2.map((word) => word.toLowerCase());
  const commonWord = arr1Lower.find((word) => arr2Lower.includes(word));
  const uniqueWords = [...arr2Lower, ...arr1Lower].filter((word) => word !== commonWord);
  return [commonWord, uniqueWords[0], uniqueWords[1], commonWord]
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('-');
};
```
