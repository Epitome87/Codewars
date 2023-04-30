# [Find the Index of the Second Occurrence of a Letter in a String](https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript)

## Description

In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

**Examples:**

```
secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
```

Good luck ;) And don't forget to rate this Kata if you liked it.

## My Solution

**JavaScript**

```js
const secondSymbol = (s, symbol) => {
  const firstOccurence = s.indexOf(symbol);
  if (firstOccurence === -1) return -1;
  for (let i = firstOccurence + 1; i < s.length; i++) {
    if (s[i] === symbol) return i;
  }
  return -1;
};
```

### User Solution

**JavaScript**

```js
function secondSymbol(s, symbol) {
  return s.indexOf(symbol, s.indexOf(symbol) + 1);
}
```

## Takeaways

1. Remember, `indexOf()` also accepts a starting index!
