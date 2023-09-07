# [Sorting the Odd Way!](https://www.codewars.com/kata/57fb79784e2d0639c9000066)

## Description

Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

If there are no issues with the kata and you successfully completed it, please rank and upvote!

## My Solution

**JavaScript**

```js
const sortItOut = (array) => {
  const odds = array.filter((n) => n % 2 ^ 0).sort((a, b) => a - b);
  const evens = array.filter((n) => !(n % 2 ^ 0)).sort((a, b) => b - a);
  return [...odds, ...evens];
};
```

### User Solution

**JavaScript**

```js
const sortItOut = (array) => [
  ...array.filter((val) => val & 1).sort((a, b) => a - b),
  ...array.filter((val) => !(val & 1)).sort((a, b) => b - a),
];
```

# Takeaways

1. Using `val & 1` will return 0 if the number is odd, 1 otherwise. Actually, it even returns 1 if just the number portion before the decimal is odd -- which is precisely what this kata wants.
