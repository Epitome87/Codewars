# [Sorting by Bits](https://www.codewars.com/kata/59fa8e2646d8433ee200003f)

## Description

In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]

- 7 has 3 on bits (000...0111)
- 6 has 2 on bits (000...0110)
- 15 has 4 on bits (000...1111)
- 8 has 1 on bit (000...1000)

So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

Your task is to write a function that takes an array of integers and sort them as described above.

Note: your solution has to sort the array in place.

Example:

```
[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
```

## My Solution

**JavaScript**

```js
const sortByBit = (arr) => {
  const numOn = (n) => (n.toString(2).match(/1/g) || []).length;

  return arr.sort((a, b) => {
    const numOnA = numOn(a);
    const numOnB = numOn(b);
    return numOnA < numOnB ? -1 : numOnB < numOnA ? 1 : a - b;
  });
};
```

### User Solution

**JavaScript**

```js
const sortByBit = (arr) =>
  arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b);
```

## Takeaways

1. Note how the user solution cleans up the return statement on the sort logic.
2. Also note how we can use the `replace` function, and even eliminate the need for `.length` using basic number properties!
