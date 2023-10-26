# [Strongest Even Number In An Interval](https://www.codewars.com/kata/5d16af632cf48200254a6244)

## Description

A strongness of an even number is the number of times we can successively divide by 2 until we reach an odd number starting with an even number n.

For example, if n = 12, then

- 12 / 2 = 6
- 6 / 2 = 3

So we divided successively 2 times and we reached 3, so the strongness of 12 is 2.

If n = 16 then

- 16 / 2 = 8
- 8 / 2 = 4
- 4 / 2 = 2
- 2 / 2 = 1

we divided successively 4 times and we reached 1, so the strongness of 16 is 4

**Task**

Given a closed interval [n, m], return the even number that is the strongest in the interval. If multiple solutions exist return the smallest strongest even number.

Note that programs must run within the allotted server time; a naive solution will probably time out.

**Constraints**

1 <= n < m <= INT_MAX

**Examples**

```
[1, 2]    -->   2  # 1 has strongness 0, 2 has strongness 1
[5, 10]   -->   8  # 5, 7, 9 have strongness 0; 6, 10 have strongness 1; 8 has strongness 3
[48, 56]  -->  48
```

## My Solution

**JavaScript**

```js
const strongestEven = (n, m) => {
  if (m - n < 1) return n;
  if (m - n < 2) return n + (n % 2);
  return 2 * strongestEven((n + (n % 2)) / 2, (m - (m % 2)) / 2);
};
```

### User Solution

**JavaScript**

```js
function strongestEven(n, m) {
  let current = n;
  for (let step = 1; current + step <= m; step *= 2) {
    if ((current + step) % (step * 2) === 0) current += step;
  }
  return current;
}
```

```js
function strongestEven(n, m) {
  const base = 2 ** (Math.log2(m) | 0);
  return n <= base ? base : base + strongestEven(n - base, m - base);
}
```

## Takeaways

1. Note the following code can successfully solve the problem -- but is too slow or causes the call-stack to fill up before solving large numbers:

```js
const strongestEven = (n, m) => {
  const binaryArr = Array.from({ length: m - n + 1 }, (v, i) => {
    const binaryStr = (i + n).toString(2);
    const trailingZero = binaryStr.match(/0+$/g);
    return trailingZero ? trailingZero[0].length : 0;
  });

  return binaryArr.indexOf(Math.max(...binaryArr)) + n;
};
```

Therefore, it may be very useful to remember the following:

**The number of times a number can be divided by 2 until it is odd is equal to the number of trailing 0's in its binary representation!**
