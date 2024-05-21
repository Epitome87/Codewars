# [Complete Fibonacci Series](https://www.codewars.com/kata/5239f06d20eeab9deb00049b)

## Description

The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

```js
fibonacci(4); // should return  [0,1,1,2]
fibonacci(-1); // should return []
```

## My Solution

**JavaScript**

```js
const fibonacci = (n) => {
  if (n <= 1) return [];

  const result = [0, 1];

  for (let i = 2; i < n; i++) result.push(result[i - 2] + result[i - 1]);

  return result;
};
```

**Python**

```py
def fibonacci(n):
    result = [0, 1]

    for i in range(2, n):
        result.append(result[i - 2] + result[i - 1])

    return [] if n < 0 else result[:n]
```

### User Solution

**Python**

```py
fib = [0, 1]

def fibonacci(n):
    for _ in range(n - len(fib)):
        fib.append(fib[-1] + fib[-2])
    return fib[:max(0, n)]
```
