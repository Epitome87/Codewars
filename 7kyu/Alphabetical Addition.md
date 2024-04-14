# [Alphabetical Addition](https://www.codewars.com/kata/5d50e3914861a500121e1958)

## Description

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

**Notes:**

- Letters will always be lowercase.
- Letters can overflow (see second to last example of the description)
- If no letters are given, the function should return 'z'

**Examples:**

```js
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
```

## My Solution

**JavaScript**

```js
const addLetters = (...letters) =>
  String.fromCharCode(97 + (letters.reduce((acc, cur) => acc + cur.charCodeAt() - 96, 25) % 26));
```

```js
const addLetters = (...letters) => {
  if (letters.length === 0) return 'z';

  const val = letters.reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0) % 26;
  return val === 0 ? 'z' : String.fromCharCode(val + 96);
};
```

### User Solution

**JavaScript**

```js
function addLetters(...letters) {
  const alpha = 'zabcdefghijklmnopqrstuvwxy';
  const sum = letters.reduce((sum, letter) => sum + alpha.indexOf(letter), 0) % 26;
  return alpha[sum];
}
```
