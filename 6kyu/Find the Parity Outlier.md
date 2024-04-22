# [Find the Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc)

## Description

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer `N`. Write a method that takes the array as an argument and returns this "outlier" `N`.

**Examples**

```
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

## My Solution

**JavaScript**

```js
const findOutlier = (integers) => {
  const odds = integers.filter((n) => n % 2 != 0);
  const evens = integers.filter((n) => n % 2 === 0);

  return odds.length === 1 ? odds[0] : evens[0];
};
```

**Python**

```py
def find_outlier(integers):
    odds = [x for x in integers if x % 2]
    evens = [x for x in integers if x % 2 == 0]
    return odds[0] if len(odds) == 1 else evens[0]
```

### User Solution

**JavaScript**

```js
function findOutlier(integers) {
  //your code here
  var len = integers.length;
  var first = Math.abs(integers[0]) % 2,
    second = Math.abs(integers[1]) % 2,
    third = Math.abs(integers[2]) % 2,
    base = first + second + third >= 2 ? 1 : 0;

  for (var i = 0; i < len; i++) {
    if (Math.abs(integers[i] % 2) != base) {
      return integers[i];
    }
  }
}
```

**Python**

```py
def find_outlier(integers):
    parity = [n % 2 for n in integers]
    return integers[parity.index(sum(parity) == 1)]
```

```py
def find_outlier(nums):
  base_parity = sum(x % 2 for x in nums[:3]) // 2

  for x in nums:
    if x % 2 != base_parity:
      return x
```
