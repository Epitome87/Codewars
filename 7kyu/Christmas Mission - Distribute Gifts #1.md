# [Christmas Mission: Distirubte Gifts #1](https://www.codewars.com/kata/584ed874bbf24eb9490001e5)

## Description

Christmas is coming soon. Santa Claus is ready for the gift, he will give the gifts to the children. The problem is, the gift of Santa Claus is not enough to give all the children. He must use a reasonable distribution plan, so that each child will get a certain amount of gifts. Your task is to help Santa Claus do the following calculation:

Each child has a wish (the number of gifts to be obtained). Provides an array of integers wishes representing all the wishes. Like this:

```
wishes = [2,4,3,5,6,7]
```

If the child's wish is a prime or 1, the child will get what he wants; If not, the number of gifts the child gets is the biggest factor in the number(less than the number itself). The result is a number, which is the total number of gifts to be distributed by Santa Claus. In accordance with the above example, the results should be:

```
[2,4,3,5,6,7] --> [2,2,3,5,3,7] --> 2+2+3+5+3+7 = 22
```

**Note:**

- All elements of wishes always be positive integers.

**Some Examples**

```js
distributeGifts([2, 4, 3, 5, 6, 7]) === 22;
distributeGifts([10, 10, 40, 100]) === 80;
distributeGifts([11, 22, 33]) === 33;
```

## My Solution

**JavaScript**

```js
const distributeGifts = (wishes) =>
  wishes.reduce((acc, cur) => {
    for (let i = 2; i <= Math.sqrt(cur); i++) if (cur % i === 0) return acc + cur / i;
    return acc + cur;
  }, 0);
```

```js
const distributeGifts = (wishes) => wishes.reduce((acc, cur) => acc + (isPrime(cur) ? cur : largestFactor(cur)), 0);

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
};

const largestFactor = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return n / i;
  return 1;
};
```
