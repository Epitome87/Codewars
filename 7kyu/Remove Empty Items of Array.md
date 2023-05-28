# [Remove Empty Items of Array](https://www.codewars.com/kata/5c857bab20089d4fe65a7f5b)

## Description

In this Kata, you will learn how to remove all empty items in an Array.

In JavaScript, empty items in arrays can be declared by `[1, 2,,,3, 4]` (Multiple commas without a value in that index)

The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>

`[1, 2, <2 empty items>, 3, 4]` should be cleared such that it should be `[1, 2, 3, 4]`

**Example:**

Before: `[1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];`

After: `[1, 2, 3, 4, null, undefined];`

## My Solution

**JavaScript**

```js
const clean = (arr) => arr.filter((el) => true);
```

### User Solution

**JavaScript**

```js
const clean = Object.values;
```
