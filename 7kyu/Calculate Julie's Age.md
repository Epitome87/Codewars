# [Calculate Julie's Age](https://www.codewars.com/kata/558445a88826e1376b000011)

## Description

Julie is x years older than her brother, and she is also y times as old as him.

Given x and y calculate Julie's age using the function age(x, y).

For example:

```js
Age(6, 3) // returns 9
Note also that x can be negative, and y can be a decimal.
```

```js
Age(-15, 0.25); // returns 5
```

That is, Julie is 15 years younger and 0.25 times the age of her brother.

Do not concern yourself with the imperfections inherent in dividing by floating point numbers, as your answer will be rounded. Also, for the sake of simplicity, Julie is never the same age as her brother.

## My Solution

**JavaScript**

```js
const age = (x, y) => x / (y - 1) + x;
```

```js
const age = (x, y) => {
  const brother = x / (y - 1);
  return brother + x;
};
```
