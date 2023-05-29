# [Most Likely](https://www.codewars.com/kata/56644a421b7c94c622000056)

## Description

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

```
Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
```

## My Solution

**JavaScript**

```js
const mostLikely = (prob1, prob2) => {
  const [num1, denom1] = prob1.split(':');
  const [num2, denom2] = prob2.split(':');
  return num1 / denom1 >= num2 / denom2;
};
```

### User Solution

**JavaScript**

```js
const divide = (a, b) => a / b;
const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));
```
