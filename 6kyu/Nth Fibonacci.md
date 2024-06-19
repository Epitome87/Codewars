# [N-th Fibonacci](https://www.codewars.com/kata/522551eee9abb932420004a0)

## Description

I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number `n` (`n >= 1`), returns the nth number in the Fibonacci Sequence.

For example:

```js
nthFibo(4) == 2;
```

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are `0` and `1`, and each subsequent number is the sum of the previous two.

## My Solution

**JavaScript**

```js
const nthFibo = (n) => (n <= 2 ? n - 1 : nthFibo(n - 2) + nthFibo(n - 1));
```

**Python**

```py
def nth_fib(n):
    a, b = 0, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return a
```

```py
def nth_fib(n):
    return n - 1 if n <= 2 else nth_fib(n - 2) + nth_fib(n - 1)
```
