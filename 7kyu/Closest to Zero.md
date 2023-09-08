# [Closest to Zero](https://www.codewars.com/kata/59887207635904314100007b)

## Description

Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:

```
[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
```

## My Solution

**JavaScript**

```js
const closest = (arr) => {
  const sorted = [...arr].sort((a, b) => Math.abs(a) - Math.abs(b));
  return sorted.slice(1).includes(-sorted[0]) ? null : sorted[0];
};
```

### User Solution

**JavaScript**

```js
function closest(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
  return Math.abs(sorted[0]) !== Math.abs(sorted[1]) ? sorted[0] : null;
}
```
