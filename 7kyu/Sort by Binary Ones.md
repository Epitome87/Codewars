# [Sort by Binary Ones](https://www.codewars.com/kata/59eb28fb0a2bffafbb0000d6)

## Description

In this example you need to implement a function that sort a list of integers based on it's binary representation.

The rules are simple:

1. sort the list based on the amount of 1's in the binary representation of each number.
2. if two numbers have the same amount of 1's, the shorter string goes first. (ex: "11" goes before "101" when sorting 3 and 5 respectively)
3. if the strings have the same length, lower decimal number goes first. (ex: 21 = "10101" and 25 = "11001", then 21 goes first as is lower)

Examples:

- Input: [1,15,5,7,3]
  - (in binary strings is: ["1", "1111", "101", "111", "11"])
- Output: [15, 7, 3, 5, 1]
  - (and after sortByBinaryOnes is: ["1111", "111", "11", "101", "1"])

## My Solution

**JavaScript**

```js
const sortByBinaryOnes = (list) =>
  [...list].sort((a, b) => b.toString(2).split('1').length - a.toString(2).split('1').length || a - b);
```

```js
const sortByBinaryOnes = (list) => {
  return [...list].sort((a, b) => {
    const numOnesA = a.toString(2).split('1').length;
    const numOnesB = b.toString(2).split('1').length;
    return numOnesA === numOnesB ? a - b : numOnesB - numOnesA;
  });
};
```

```js
const sortByBinaryOnes = (list) => {
  const sorted = [...list].sort((a, b) => {
    const binaryA = a.toString(2);
    const binaryB = b.toString(2);
    const numOnesA = binaryA.split('1').length - 1;
    const numOnesB = binaryB.split('1').length - 1;

    if (numOnesA === numOnesB) {
      if (a.length === b.length) return a < b ? -1 : 1;
      else return a.length < b.length ? -1 : 1;
    }

    return numOnesB - numOnesA;
  });

  return sorted;
};
```

### Takeaways

1. My solution uses some redundant checks. For example, when the two numbers being compared have the same number of 1's, I do not need to check if their binary length is the same. I simply should have returned a - b. This is because a number that is lower in value will always have equal to or less binary string length than a greater number. Thus, the "shorter string" and "lower decimal" aren't two separate conditions to check, but rather one!
