# Test Your Knowledge of Function Scope

## Description

Write a function that adds from two invocations.

All inputs will be integers.

add(3)(4) // 7
add(12)(20) // 32

## My Solution

```js
const add = (num1) => (num2) => num1 + num2;
```
