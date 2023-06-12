# [Bits Battle](https://www.codewars.com/kata/58856a06760b85c4e6000055)

## Description

The odd and even numbers are fighting against each other!

You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.

You should return:

- odds win if number of 1s from odd numbers is larger than 0s from even numbers
- evens win if number of 1s from odd numbers is smaller than 0s from even numbers
- tie if equal, including if list is empty

Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

**Example:**

For an input list of [5, 3, 14]:

- odds: 5 and 3 => 101 and 11 => four 1s
- evens: 14 => 1110 => one 0

Result: odds win the battle with 4-1

If you enjoyed this kata, you can find a nice variation of it here.

## My Solution

**JavaScript**

```js
const bitsBattle = (numbers) => {
  const power = numbers.reduce(
    (acc, curr) => (curr === 0 ? acc : acc + (curr.toString(2).split(curr % 2).length - 1) * [-1, 1][curr % 2]),
    0
  );
  return power > 0 ? 'odds win' : power < 0 ? 'evens win' : 'tie';
};
```

```js
const bitsBattle = (numbers) => {
  const power = numbers.reduce(
    (acc, curr) =>
      curr === 0
        ? acc
        : curr % 2
        ? acc - (curr.toString(2).split('1').length - 1)
        : acc + curr.toString(2).split('0').length - 1,
    0
  );
  return power < 0 ? 'odds win' : power > 0 ? 'evens win' : 'tie';
};
```

```js
const bitsBattle = (numbers) => {
  const power = numbers.reduce((acc, curr) => {
    if (curr === 0) return acc;
    if (curr % 2) return acc - (curr.toString(2).split('1').length - 1);
    return acc + (curr.toString(2).split('0').length - 1);
  }, 0);
  return power < 0 ? 'odds win' : power > 0 ? 'evens win' : 'tie';
};
```

### User Solution

**JavaScript**

```js
const bitsBattle = (arr) => {
  var score = arr.reduce((a, x) => a + (x & 1 ? 1 : -1) * (x && x.toString(2).split(x & 1).length - 1), 0);
  return score > 0 ? 'odds win' : score < 0 ? 'evens win' : 'tie';
};
```
