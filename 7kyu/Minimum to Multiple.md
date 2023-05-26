# [Minimum to Multiple](https://www.codewars.com/kata/5e030f77cec18900322c535d)

## Description

Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

```js
minimum(10, 6); //= 2

// 10+2 = 12 which is a multiple of 6
```

**Note**

- 0 is always a multiple of x

**Constraints**

1 <= a <= 10<sup>6</sup>

1 <= x <= 10<sup>5</sup>

## My Solution

**JavaScript**

```js
// Much faster solution
const minimum = (a, x) => Math.abs(Math.round(a / x) * x - a);
```

```js
// Awful brute-force method
const minimum = (a, x) => {
  for (let i = 0; ; i++) {
    if ((a + i) % x === 0 || (a - i) % x === 0) return i;
  }
};
```

### User Solution

**JavaScript**

```js
const minimum = (a, x) => Math.min(x - (a % x), a % x);
```

## Takeaways:

1. The user solution is quite clever! Here it the explanation, in the author's own words:

```
x = 4, a = 7

Multiples of x: 0----------4------------8------------12
a:                                 7
                            <------><-->
dist to mult:                  d1    d2
d1 + d2 = x
d1 = a % x, so
d2 = x - a % x
We're looking for the minimum distance to the multiple: Math.min(a % x, x - a % x)
```
