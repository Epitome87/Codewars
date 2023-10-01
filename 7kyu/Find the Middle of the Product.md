# [Find the Middle of the Product](https://www.codewars.com/kata/5ac54bcbb925d9b437000001)

## Description

Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits. In this case and the case for any non-strings, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1

## My Solution

**JavaScript**

```js
const findMiddle = (str) => {
  if (typeof str !== 'string') return -1;
  const digits = str.match(/\d/g);
  if (!digits) return -1;
  const product = `${digits.reduce((acc, cur) => acc * cur, 1)}`;
  return product.length % 2
    ? +product[(product.length / 2) ^ 0]
    : +product.slice(product.length / 2 - 1, product.length / 2 + 1);
};
```

### User Solution

**JavaScript**

```js
function findMiddle(str) {
  if (typeof str != 'string' || !/\d/.test(str)) return -1;
  const s = Array.from(str.replace(/\D/g, ''))
    .reduce((x, y) => x * y)
    .toString();
  return +s.slice(Math.ceil(s.length / 2 - 1), Math.floor(s.length / 2 + 1));
}
```
