# [Fundamentals: Return](https://www.codewars.com/kata/55a5befdf16499bffb00007b)

## Description

Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b

## My Solution

**JavaScript**

```js
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}
```

**Python**

```py
add = lambda a, b: a + b
subt = lambda a, b: a - b
multiply = lambda a, b: a * b
divide = lambda a, b: a / b
mod = lambda a, b: a % b
exponent = lambda a, b: a ** b
```
