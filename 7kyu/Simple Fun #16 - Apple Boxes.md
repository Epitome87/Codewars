# [Simple Fun #16: Apple Boxes](https://www.codewars.com/kata/58846b46f4456a8919000025)

## Description

There're k square apple boxes full of apples. If a box is of size m, then it contains m × m apples. You noticed two interesting properties about the boxes:

```
The smallest box is of size 1,
the next one is of size 2,...,
all the way up to size k.

Boxes that have an odd size contain only yellow apples.
Boxes that have an even size contain only red apples.
```

Your task is to calculate the difference between the number of red apples and the number of yellow apples.

**Example**

For k = 5, the output should be -15

There are 1 + 3 × 3 + 5 × 5 = 35 yellow apples and 2 × 2 + 4 × 4 = 20 red apples, thus the answer is 20 - 35 = -15.

**Input/Output**

- [input] integer k

A positive integer.

Constraints: 1 ≤ k ≤ 40

- [output] an integer

The difference between the two types of apples.

## My Solution

**JavaScript**

```js
const appleBoxes = (k) => {
  const numArr = Array.from({ length: k }, (_, i) => (i + 1) ** 2);
  const numYellow = numArr.filter((v, i) => i % 2).reduce((acc, cur) => acc + cur, 0);
  const numRed = numArr.filter((v, i) => !(i % 2)).reduce((acc, cur) => acc + cur, 0);
  return numYellow - numRed;
};
```

### User Solution

**JavaScript**

```js
function appleBoxes(k) {
  var result = 0;
  for (let i = 1; i <= k; i++) result += i * i * (i % 2 ? -1 : 1);
  return result;
}
```

```js
const appleBoxes = (k) => ((k * ++k) / 2) * ((k % 2) * 2 - 1);
```

```js
const appleBoxes = (k) => (k ** 2 + k) / (k % 2 ? -2 : 2);
```
