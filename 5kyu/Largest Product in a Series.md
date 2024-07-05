# [Personalized Brand List](https://www.codewars.com/kata/529872bdd0f550a06b00026e)

## Description

Complete the `greatestProduct` method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example: the greatest product of five consecutive digits in the string `"123834539327238239583"` is 3240.

The input string always has more than five digits.

Adapted from Project Euler.

## My Solution

**JavaScript**

```js
const greatestProduct = (input) => {
  let greatest = 0;

  for (let i = 0; i < input.length - 4; i++) {
    const product = [...input].slice(i, i + 5).reduce((acc, cur) => acc * cur, 1);
    greatest = Math.max(greatest, product);
  }

  return greatest;
};
```

**Python**

```py
def greatest_product(st):
    greatest = 0

    for i in range(0, len(st) - 4):
        product = 1
        for j in range(i, i + 5):
            product *= int(st[j])
        greatest = max(greatest, product)

    return greatest
```
