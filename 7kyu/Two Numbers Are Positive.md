# [Two Numbers Are Positive](https://www.codewars.com/kata/602db3215c22df000e8544f0)

## Description

**Task:**

Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

**Examples:**

```
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
```

## My Solution

**JavaScript**

```js
const twoArePositive = (...nums) => nums.reduce((acc, curr) => acc + (curr > 0), 0) === 2;
```

### User Solution

**JavaScript**

```js
const twoArePositive = (...nums) => nums.filter((x) => x > 0).length == 2;
```
