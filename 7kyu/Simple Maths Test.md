# [Simple Maths Test](https://www.codewars.com/kata/5507309481b8bd3b7e001638)

## Description

Create a function which checks a number for three different properties.

- is the number prime?
- is the number even?
- is the number a multiple of 10?

Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

Examples

```js
numberProperty(7); // ==> [true,  false, false]
numberProperty(10); // ==> [false, true,  true]
```

The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

```js
numberProperty(-7); // ==> [false, false, false]
numberProperty(-10); // ==> [false, true,  true]
```

## My Solution

**JavaScript**

```js
const numberProperty = (n) => {
  const isPrime = (val) => {
    for (let i = 2; i < val / 2; i++) {
      if (val % i === 0) return false;
    }
    return val > 1;
  };

  return [isPrime(n), !(n % 2), !(n % 10)];
};
```

### User Solution

**JavaScript**

```js
// More efficient way to check for large primes
function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  if (n % 2 == 0) return n == 2;
  if (n % 3 == 0) return n == 3;
  var m = Math.sqrt(n);
  for (var i = 5; i <= m; i += 6) {
    if (n % i == 0) return false;
    if (n % (i + 2) == 0) return false;
  }
  return true;
}
```
