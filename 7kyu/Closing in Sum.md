# [Closing in Sum](https://www.codewars.com/kata/65126d52a5de2b11c94096d2)

## Description

Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

Worked Example

```
2520 ➞ 72

# The first and last digits are 2 and 0.
# 2 and 0 form 20.
# The second digit is 5 and the second to last digit is 2.
# 5 and 2 form 52.

# 20 + 52 = 72
```

Examples

```
121 ➞ 13
# 11 + 2

1039 ➞ 22
# 19 + 3

22225555 ➞ 100
# 25 + 25 + 25 + 25
```

Notes

- If the number has an odd number of digits, simply add on the single-digit number in the center (see example #1).
- Any number which is zero-padded counts as a single digit (see example #2).

## My Solution

**JavaScript**

```js
const closingInSum = (n) => {
  const numStr = `${n}`;
  let totalSum = 0;

  for (let l = 0, r = numStr.length - 1; l <= r; l++, r--) {
    if (l === r) totalSum += +numStr[l];
    else totalSum += +(numStr[l] + numStr[r]);
  }

  return totalSum;
};
```

```js
const closingInSum = (n) => {
  const numStr = `${n}`;
  const combined = [];

  for (let left = 0, right = numStr.length - 1; left <= right; left++, right--) {
    if (left === right) combined.push(+numStr[left]);
    else combined.push(+(numStr[left] + numStr[right]));
  }

  return combined.reduce((acc, cur) => acc + cur, 0);
};
```

**Python**

```py
def closing_in_sum(n):
    numStr = str(n)
    left, right = 0, len(numStr) - 1
    totalSum = 0

    while left <= right:
        totalSum += int(numStr[left] if left == right else numStr[left] + numStr[right])
        left += 1
        right -= 1

    return totalSum
```

### User Solution

**JavaScript**

```js
const closingInSum = (n) => [...`${n}`].reduce((sum, dgt, idx, arr) => sum + dgt * 10 ** (++idx <= arr.length / 2), 0);
```
