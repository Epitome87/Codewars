# [Get the Length of the List Recursively](https://www.codewars.com/kata/57a83e447cb1f32de80000d5)

## Description

Write function lenR which returns the length of a given list. Try no to cheat and provide recursive solution.

## My Solution

**JavaScript**

```js
const lenR = (x, count = 0) => (x.length ? lenR(x.slice(1), ++count) : count);
```

### User Solution

**JavaScript**

```js
function lenR([head, ...tail]) {
  if (!head) return 0;

  return 1 + lenR(tail);
}
```
