# [Even Fibonacci Sum](https://www.codewars.com/kata/55688b4e725f41d1e9000065)

## Description

Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

```js
fibonacci(0) == 0;
fibonacci(33) == 10;
fibonacci(25997544) == 19544084;
```

## My Solution

**JavaScript**

```js
const fibonacci = (max) => {
  const fib = [0, 1];
  let sum = 0;

  for (let i = 2; ; i++) {
    const current = fib[i - 2] + fib[i - 1];
    if (current >= max) return sum;
    if (current % 2 === 0) sum += current;
    fib.push(current);
  }
};
```

### User Solution

**JavaScript**

```js
function fibonacci(max) {
  if (max < 2) return 0;

  let [a, b] = [1, 0];
  let sum = 0;

  while (b < max) {
    [a, b] = [b, a + b];
    if (b % 2 === 0 && b < max) sum += b;
  }

  return sum;
}
```
