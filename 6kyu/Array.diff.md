# [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009)

## Description

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

```js
arrayDiff([1, 2], [1]) == [2];
```

If a value is present in b, all of its occurrences must be removed from the other:

```js
arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];
```

## My Solution

**JavaScript**

```js
const arrayDiff = (a, b) => a.filter((num) => !b.includes(num));
```
