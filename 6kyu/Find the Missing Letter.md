# [Find the Missing Letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

```
['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
```

(Use the English alphabet with 26 letters!)

## My Solution

**JavaScript**

```js
const findMissingLetter = (array) => {
  for (let i = 1; i < array.length; i++) {
    const charCode = array[i].charCodeAt();
    const previousCharCode = array[i - 1].charCodeAt();
    if (charCode !== previousCharCode + 1) return String.fromCharCode(previousCharCode + 1);
  }
};
```

**Python**

```py
def find_missing_letter(chars):
    for i in range(1, len(chars)):
        expected_char = chr(ord(chars[i - 1]) + 1)
        if expected_char != chars[i]:
            return expected_char
```

### User Solution

**JavaScript**

```js
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find((el) => !array.includes(el));
};
```
