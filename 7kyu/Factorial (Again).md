# [Factorial](https://www.codewars.com/kata/57a049e253ba33ac5e000212)

## Description

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

## My Solution

**JavaScript**

```js
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
```

**TypeScript**

```ts
export const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
```
