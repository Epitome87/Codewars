# [Calculate String Rotation](https://www.codewars.com/kata/5596f6e9529e9ab6fb000014)

## Description

Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.

Examples:

```
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
```

## My Solution

**JavaScript**

```js
const shiftedDiff = (first, second) => {
  if (first === second) return 0;
  if (first.length !== second.length) return -1;

  let numRotations = 0;

  for (let i = 1; i < first.length; i++) {
    const slice = first.slice(-i) + first.slice(0, first.length - i);
    numRotations++;
    if (slice === second) return numRotations;
  }

  return -1;
};
```

### User Solution

**JavaScript**

```js
function shiftedDiff(first, second) {
  return first.length == second.length ? (second + second).indexOf(first) : -1;
}
```
