# [All Star Code Challenge #7](https://www.codewars.com/kata/586427d883f7e6b5670001dc)

## Description

Create a function, called compute, that accepts an integer argument, N, and returns the value of the following expression, where N is a odd positive integer given by the user

Expression : 1 +....+ 1/(N)^2

For example, when N = 9, compute() should evaluate the following: 1 + 1/(3)^2 + 1/(5)^2 + 1/(7)^2 + 1/(9)^2 == ~1.1838649533887629

Note: User input of an even number OR a number less than 3 should return 0.

```
compute(5); // => 1.1511111111111112
compute(9); // => 1.1838649533887629
compute(-1); // => 0
compute(8); // => 0
```

## My Solution

**JavaScript**

```js
const compute = (n) => {
  let result = 0;

  if (n < 3 || !(n % 2)) return result;

  for (let i = 1; i <= n; i += 2) {
    result += 1 / (i * i);
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
const compute = (n) => (n % 2 == 1 ? 1 / n ** 2 + compute(n - 2) : 0);
```
