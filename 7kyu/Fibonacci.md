# [Fibonacci](https://www.codewars.com/kata/57a1d5ef7cb1f3db590002af)

## Description

Create function fib that returns n'th element of Fibonacci sequence (classic programming task).

## My Solution

**Python**

```py
fib_cache = { 0 : 0, 1 : 1 }

def fibonacci(n: int) -> int:
    if n in fib_cache:
        return fib_cache[n]
    fib_cache[n] = fibonacci(n - 2) + fibonacci(n - 1)
    return fib_cache[n]
```

### User Solution

**Python**

```py
# Not using recursion
def fibonacci(n: int) -> int:
    x, y = 0, 1
    for i in range(n):
        x, y = y, y + x
    return x
```

```py
# Keeping the function pure
def fibonacci(n, computed = {0: 0, 1: 1}):
    if n not in computed:
        computed[n] = fibonacci(n-1, computed) + fibonacci(n-2, computed)
    return computed[n]
```
