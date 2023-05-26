# [Most Valuable Character](https://www.codewars.com/kata/5dd5128f16eced000e4c42ba)

## Description

In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically lowest character. [For Golang return rune]

All inputs will be lower case.

For example:

```
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
```

More examples in test cases. Good luck!

## My Solution

**JavaScript**

```js
const solve = (str) => {
  return [...str].reduce(
    ([highestValue, mostValuable], curr) => {
      const value = str.lastIndexOf(curr) - str.indexOf(curr);
      return value > highestValue
        ? [value, curr]
        : value === highestValue
        ? [value, [mostValuable, curr].sort()[0]]
        : [highestValue, mostValuable];
    },
    [0, 'z']
  )[1];
};
```

```js
const solve = (str) => {
  let highestValue = 0;
  let mostValuable = 'z';

  for (let char of str) {
    const value = str.lastIndexOf(char) - str.indexOf(char);

    if (value > highestValue) {
      mostValuable = char;
      highestValue = value;
    } else if (value === highestValue) {
      mostValuable = [mostValuable, char].sort()[0];
    }
  }

  return mostValuable;
};
```

### User Solution

**JavaScript**

```js
function solve(str) {
  let maxDiff = 0,
    result = 'z';
  for (let el of str) {
    let diff = str.lastIndexOf(el) - str.indexOf(el);
    if (maxDiff < diff || (maxDiff == diff && el <= result)) {
      result = el;
      maxDiff = diff;
    }
  }
  return result;
}
```
