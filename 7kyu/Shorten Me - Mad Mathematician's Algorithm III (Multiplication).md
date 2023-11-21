# [Shorten Me: Mad Mathematician's Algorithm III (Multiplication)](https://www.codewars.com/kata/5a6860bce6be38cdbf00005a)

## Description

**Task**

You have to write a madMul(a,b) function returning a value of a _ b without _ in your code.

**Coding Limitation:**

- Less than 30 characters

**Input:**

- a and b : integer ( 0-10000 )

Note: Avoid using Math.imul()

## My Solution

**JavaScript**

```js
madMul = f = (a, b) => a && b + f(--a, b);
```

### User Solution

**JavaScript**

```js
madMul = (a, b) => ~~(a / (1 / b) + 0.5);
```

```js
madMul = (x, y) => (x / (1 / y) + 0.1) | 0;
```

```js
madMul = (a, b) => (0.1 + a / (1 / b)) | 0;
```

```js
let madMul = (a, b) => (b / (1 / a)) ^ 0;
```
