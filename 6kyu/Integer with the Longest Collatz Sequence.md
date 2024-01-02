# [Integer with the Longest Collatz Sequence](https://www.codewars.com/kata/57acc8c3e298a7ae4e0007e3)

## Description

**Background - the Collatz Conjecture:**

Imagine you are given a positive integer, n, then:

- if n is even, calculate: n / 2
- if n is odd, calculate: 3 \* n + 1

Repeat until your answer is 1. The Collatz conjecture states that performing this operation repeatedly, you will always eventually reach 1.

You can try creating Collatz sequences with this kata. For further information, see the wiki page.

**Now! Your task:**

Given an array of positive integers, return the integer whose Collatz sequence is the longest.

Example:

```js
longestCollatz([2, 4, 3]) === 3;
```

Explanation: The Collatz sequence for 2 has a length of 1, the sequence for 4 has a length of 2, and the sequence for 3 has a length of 7. So from our array, the integer 3 is the one with the longest Collatz sequence.

Hence, your function should return 3.

**Note:**

There may be more than one answer, i.e. two or more integers produce the longest Collatz sequence, because they happen to have sequences of the same length. In this case, your function should return the integer that appears first in the array.

Example: Given an array: [2, 5, 32], both 5 and 32 have Collatz sequences of length 5. These are also the longest sequences from our array.

In this case, our function returns 5, because 5 comes before 32 in our array.

## My Solution

**JavaScript**

```js
const longestCollatz = (inputArray) => {
  const lengths = inputArray.map((x) => {
    let count = 1;

    while (x !== 1) {
      x = x % 2 ? x * 3 + 1 : x / 2;
      count++;
    }

    return count;
  });

  const longest = Math.max(...lengths);
  return inputArray[lengths.indexOf(longest)];
};
```

### User Solution

**JavaScript**

```js
function longestCollatz(inputArray) {
  const seq = inputArray.map((e) => getCollatz(e)),
    max = Math.max(...seq);
  return inputArray[seq.indexOf(max)];
}

const getCollatz = (n, count = 1) => {
  return n == 1 ? count : n % 2 == 0 ? getCollatz(n / 2, (count += 1)) : getCollatz(3 * n + 1, (count += 1));
};
```
