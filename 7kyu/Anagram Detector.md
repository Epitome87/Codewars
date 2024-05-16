# [Anagram Detector](https://www.codewars.com/kata/529eef7a9194e0cbc1000255)

## Description

An **anagram** is the result of rearranging the letters of a word to produce a new word (see wikipedia).

**Note:** anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

**Examples**

- "foefet" is an anagram of "toffee"
- "Buckethead" is an anagram of "DeathCubeK"

## My Solution

**JavaScript**

```js
const isAnagram = (test, original) =>
  [...test.toLowerCase()].sort().join('') === [...original.toLowerCase()].sort().join('');
```

```js
const isAnagram = (test, original) => {
  const map = {};

  for (let char of test.toLowerCase()) map[char] = map[char] === undefined ? 1 : map[char] + 1;

  for (let char of original.toLowerCase()) map[char] = map[char] === undefined ? -1 : map[char] - 1;

  return Object.values(map).every((value) => value === 0);
};
```

```js
const isAnagram = (test, original) => {
  if (test.length !== original.length) return false;

  let lowerTest = test.toLowerCase();
  let lowerOriginal = original.toLowerCase();

  for (let i = 0; i < original.length; i++) {
    if (lowerTest.includes(lowerOriginal[0])) {
      lowerTest = lowerTest.replace(lowerOriginal[0], '');
      lowerOriginal = lowerOriginal.replace(lowerOriginal[0], '');
    } else return false;
  }

  return true;
};
```

**Python**

```py
def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())
```

```py
def is_anagram(test, original):
    result = {}
    for char in test.lower():
        result[char] = result.get(char, 0) + 1
    for char in original.lower():
        result[char] = result.get(char, 0) - 1
    return all(result[x] == 0 for x in result)
```
