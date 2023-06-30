# [Sum of Odd Numbers](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064)

## Description

Given the triangle of consecutive odd numbers:

```

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

```
1 -->  1
2 --> 3 + 5 = 8
```

## My Solution

**JavaScript**

```js
const rowSumOddNumbers = (n) => n ** 3;
```

### User Solution

**JavaScript**

```js
const rowSumOddNumbers = (n) => {
  let start = n * n - n + 1;
  let result = 0;

  for (let i = 0; i < n; i++) {
    result = result + (start + i * 2);
  }

  return result;
};
```
