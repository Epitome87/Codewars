# Recursion #2 - Fibonacci

## Description

Do you know recursion?
This is a kata series that you can only solve using recursion.
##2 - Fibonacci number

In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

f(n) = f(n-1) + f(n-2)

with seed values

f(1) = 1 and f(2) = 1

#Your task

You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.

## My solution

```js
const fibonacci = (n) => (n > 2 ? fibonacci(n - 2) + fibonacci(n - 1) : 1);
```

### Clever User Solution

```js
var cache = { 1: 1, 2: 1 };

const fibonacci = (n) => cache[n] || (cache[n] = fibonacci(n - 1) + fibonacci(n - 2));
```

## Takeaways

Consider using a cache mechanism to retrieve values of Fib(n) that we have already calculated!
