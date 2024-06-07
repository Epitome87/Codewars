# [Parse Integers in Array](https://www.codewars.com/kata/535d118ccdbf501816001101)

## Description

A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

Examples:

```js
parseNumbers(['10']); // should return [10]
parseNumbers(['-1', '0', '1']); // should return [-1,0,1]
```

Original code:

```js
const parseNumbers = (intStrs) => intStrs.map(parseInt);
```

## My Solution

**JavaScript**

```js
const parseNumbers = (intStrs) => intStrs.map((n) => parseInt(n));
```

## Takeaways

1. The reason we must directly call `parseInt(n)` with arguments is because it is a method which can accept more than one argument (the number and the radix). Since the callback function in `map` can accept an optional index and array argument, it is passing map's 2nd parameter (index) to the parseInt method. Consequently, this does not always give the appropriate result.
