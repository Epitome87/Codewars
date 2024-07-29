# [Find the Position](https://www.codewars.com/kata/5808e2006b65bff35500008f)

## Description

When provided with a letter, return its position in the alphabet.

Input: "a"
Output "Position of alphabet: 1"

## My Solution

**JavaScript**

```js
const position = (letter) => `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
```

```js
const position = (letter) => {
  const alphabet = '_abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${alphabet.indexOf(letter)}`;
};
```

**Python**

```py
def position(letter):
    return f"Position of alphabet: {ord(letter) - 96}"
```
