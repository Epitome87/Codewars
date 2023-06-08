# [Center Yourself, Says the Monk](https://www.codewars.com/kata/596b8a3fc4cb1de46b000001)

## Description

Your company MRE Tech has hired a spiritual consultant who advised on a new Balance policy: Don't take sides, don't favour, stay in the middle. This policy even applies to the software where all strings should now be centered. You are the poor soul to implement it.

**Task**

Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

```js
center(strng, width, (fill = ' '));
```

If the left and right padding cannot be of equal length make the padding on the left side one character longer.

If strng is longer than width return strng unchanged.

**Examples**

```js
center('a', 3)  # returns " a "
center('abc', 10, '_')  # returns "____abc___"
center('abcdefg', 2)  # returns "abcdefg"
```

## My Solution

**JavaScript**

```js
const center = (str, width, fill = ' ') => {
  const numFill = str.length > width ? 0 : width - str.length;
  return fill.repeat(Math.ceil(numFill / 2)) + str + fill.repeat(numFill / 2);
};
```

### User Solution

**JavaScript**

```js
function center(strng, width, fill = ' ') {
  return strng.length > width ? strng : strng.padStart(Math.ceil((width + strng.length) / 2), fill).padEnd(width, fill);
}
```
