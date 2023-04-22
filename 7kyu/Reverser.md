# [Reverser](https://www.codewars.com/kata/58069e4cf3c13ef3a6000168)

## Description

Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

```js
// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
```

## My Solution

**JavaScript**

```js
const reverse = (n) => {
  let digit = 0;
  let result = 0;

  while (n) {
    digit = n % 10;
    result = result * 10 + digit;
    n = (n / 10) | 0;
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
// Essentially just my solution with the calculation of digit done in-line
function reverse(n) {
  let rev = 0;
  while (n) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}
```

```js
// Clever user solution
reverse = (n) =>
  +([] + n)
    .split([] + [])
    .reverse()
    .join([] + []);
```

## Takeaways

1. Since many useful methods for converting the input to a string are disabled, the typical JavaScript way to solve this challenge is not allowed. The clever user solution actually still deals with Strings, using some odd JavaScript quirks. Breaking down the clever user solution:
   - Convert integer n to a string: ([] + n)
   - Calculate [] + [], which is "" (empty string)
   - Split that string on the empty string character
   - Reverse
   - Join on the result of ([] + []), again empty string character
