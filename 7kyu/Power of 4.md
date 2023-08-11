# [Power of 4](https://www.codewars.com/kata/544d114f84e41094a9000439)

## Description

Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

**Examples**

```js
powerOf4(1024); // returns true
powerOf4(44); // returns false
powerOf4('not a positive integer'); // returns false
```

## My Solution

**JavaScript**

```js
const powerOf4 = (n) => typeof n === 'number' && Number.isInteger(Math.log(n) / Math.log(4));
```

### User Solution

**JavaScript**

```js
const powerOf4 = (n) => typeof n === 'number' && Math.log2(n) % 2 === 0;
```

```js
function powerOf4(n) {
  return Number.isInteger(n) && Number.isInteger(Math.log(n) / Math.log(4));
}
```

## Takeaways

1. Rather than `typeof n`, we can use `Number.isInteger(n)`, which only returns true if the passed argument is a true integer, and not a string or something else.
