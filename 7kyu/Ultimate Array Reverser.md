# [Ultimate Array Reverser](https://www.codewars.com/kata/5c3433a4d828182e420f4197)

## Description

**Task**

Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

**Example:**

```
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
```

Good luck!

## My Solution

**JavaScript**

```js
const ultimateReverse = (s) => {
  let index = 0;
  const reversedStr = [...s.join('')].reverse().join('');
  return s.reduce(
    (acc, curr, idx, arr) => ((index += curr.length), [...acc, reversedStr.slice(index - curr.length, index)]),
    []
  );
};
```

```js
const ultimateReverse = (s) => {
  const result = [];
  let index = 0;
  const reversedStr = [...s.join('')].reverse().join('');
  for (let i = 0; i < s.length; i++) {
    result.push(reversedStr.slice(index, index + s[i].length));
    index += s[i].length;
  }
  return result;
};
```

### User Solution

```js
function ultimateReverse(words) {
  let reversed = [...words.join('')].reverse();
  return words.map((word) => reversed.splice(0, word.length).join(''));
}
```
