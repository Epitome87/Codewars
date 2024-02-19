# [Isograms](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

## Description

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

## My Solution

**JavaScript**

```js
const isIsogram = (str) => new Set(str.toLowerCase()).size === str.length;
```

```js
const isIsogram = (str) => {
  const stringLowercased = str.toLowerCase();
  const usedLetters = {};

  for (let letter of stringLowercased) {
    if (usedLetters[letter]) return false;
    else usedLetters[letter] = true;
  }

  return true;
};
```

**Python**

```py
def is_isogram(string):
    return len(set(string.lower())) == len(string)
```

### User Solution

**JavaScript**

```js
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
```
