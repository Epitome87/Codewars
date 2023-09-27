# [The Crockford Invocation](https://www.codewars.com/kata/57e7d21f6603f6e31f00007c)

## Description

Write three functions add, subtract, and multiply such that each require two invocations.

For example:

```js
add(3)(4); // 7
subtract(3)(4); // -1
multiply(3)(4); // 12
```

Once you have done this. Write a function apply that takes one of these functions as an argument and invokes it.

For example:

```js
apply(add)(3)(4); // 7
apply(subtract)(3)(4); // -1
apply(multiply)(3)(4); // 12
```

This kata is based on the following talk by Douglas Crockford: https://youtu.be/hRJrp17WnOE

## My Solution

**JavaScript**

```js
const add = (a, b) => (b) => a + b;
const subtract = (a, b) => (b) => a - b;
const multiply = (a, b) => (b) => a * b;
const apply = (fn) => fn;
```
