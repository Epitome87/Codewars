# [Convert Between Radians and Degrees](https://www.codewars.com/kata/544e2c60908f2da03600022a)

## Description

Extend the Math object (JS) or module (Ruby and Python) to convert degrees to radians and viceversa. The result should be rounded to two decimal points. Note that all methods of Math object are static.

Example:

```js
Math.degrees(Math.PI); //180deg
Math.radians(180); //3.14rad
```

## My Solution

**JavaScript**

```js
Math.degrees = (radians) => `${((radians * 180) / Math.PI).toFixed(2).replace(/\.0*$|0*$/, '')}deg`;
Math.radians = (degrees) => `${((degrees * Math.PI) / 180).toFixed(2).replace(/\.0*$|0*$/, '')}rad`;
```

### User Solution

**JavaScript**

```js
Math.degrees = (v) => Math.round((v / Math.PI) * 180 * 100) / 100 + 'deg';
Math.radians = (v) => Math.round((v / 180) * Math.PI * 100) / 100 + 'rad';
```

## Takeaways

Because `Math` isn't a constructor, it does not have a `prototype` property.

This is why we could not directly extend the `Math` functionality with:

```js
// Will not work!
Math.prototype.degrees = fn;
```

Since `Math` is an `Object` instance, `Math.__proto__` is `Object.prototype`. So we _could_ extend the Math object as follows:

```js
Object.prototype.degrees = fn;
```

**However**: This is actually a bad idea! This will add the methods to _all_ objects, not just those belonging to `Math`.

**In summary**...

```js
// Works, but very bad practice:
Object.prototype.degrees = fn;
Math.__proto__.degrees = fn;

// Ideal:
Math.degrees = fn;
```
