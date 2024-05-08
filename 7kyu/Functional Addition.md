# [Functional Addition](https://www.codewars.com/kata/538835ae443aae6e03000547)

## Description

Create a function `add(n)` / `Add(n)` which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

```js
var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
```

## My Solution

**JavaScript**

```js
const add = (x) => (y) => x + y;
```

**Python**

```py
add = lambda x: lambda y: x + y
```
