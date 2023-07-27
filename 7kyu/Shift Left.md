# [Shift Left](https://www.codewars.com/kata/5bdc191306a8a678f6000187/)

## Description

You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

- By applying a move to the string "where", the result is the string "here".
- By applying a move to the string "a", the result is an empty string "".
  Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

**Notes**

- Both strings consist of lowercase latin letters.
- If the string is already empty, you cannot perform any more delete operations.

## My Solution

**JavaScript**

```js
const shiftLeft = (s, t) => {
  let numMoves = 0;

  while (s !== t) {
    if (s.length >= t.length) s = s.slice(1);
    else t = t.slice(1);
    numMoves++;
  }

  return numMoves;
};
```

### User Solution

**JavaScript**

```js
const shiftLeft = (s, t) =>
  s === t ? 0 : 1 + (s.length > t.length ? shiftLeft(s.slice(1), t) : shiftLeft(s, t.slice(1)));
```
