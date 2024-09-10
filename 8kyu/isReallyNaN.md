# [isReallyNaN](https://www.codewars.com/kata/56c24c58e0c0f741d4001aef)

## Description

I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!

## My solution

```js
const isReallyNaN = (val) => val !== val;
```

### User solution

```js
const isReallyNaN = ($) => typeof $ === 'number' && isNaN($);
```

```js
const isReallyNaN = (val) => Number.isNaN(val);
```

```js
const isReallyNaN = Number.isNaN;
```

## Takeaways

1. Remember, NaN is the ONLY value where comparing it to the INEQUALITY of itself always returns true!
2. Number.isNaN behaves correctly for undefined values
3. Implicit arguments
