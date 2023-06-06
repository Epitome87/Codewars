# [Product of Largest Pair](https://www.codewars.com/kata/5784c89be5553370e000061b)

## Description

Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

```
Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).
```

```js
maxProduct([2, 1, 5, 0, 4, 3]); // 20
maxProduct([7, 8, 9]); // 72
maxProduct([33, 231, 454, 11, 9, 99, 57]); // 104874
```

## My Solution

**JavaScript**

```js
const maxProduct = (a) => {
  const first = Math.max.apply(Math, a);
  const second = Math.max.apply(
    Math,
    a.filter((el) => el !== first)
  );
  return first * second;
};
```

### User Solution

**JavaScript**

```js
function maxProduct(a) {
  let largestVal = a.splice(a.indexOf(Math.max(...a)), 1);
  let secondVal = a.splice(a.indexOf(Math.max(...a)), 1);
  return largestVal * secondVal;
}
```

```js
function maxProduct(a) {
  var max = a[0];
  var preMax = a[0];
  for (var i = 1; i < a.length; i++) {
    if (a[i] > max) {
      preMax = max;
      max = a[i];
    } else {
      if (a[i] > preMax) {
        preMax = a[i];
      }
    }
  }

  return max * preMax;
}
```
