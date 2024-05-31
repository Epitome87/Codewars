# [Geometric Mean I](https://www.codewars.com/kata/56ebcea1b9d927f9bf000544)

## Description

For a variable, x, that may have different values, the geometric mean is defined as:
G = (product of all elements) ^ ( 1 / number of elements)
​

Suposse that you have to calculate the geometric mean for a research where the amount of values of x is rather small.

Implement the function geometric_meanI(), (geometricMeanI javascript)that receives an array with the different values of the variable and outputs the geometric mean value.

The negative values and strings will be discarded for the calculations.

Nevertheless if the amount of total invalid values is too high, the function will return 0 (Nothing in Haskell). The tolerance for invalid values of the variable will be as follows:

```
amount of entries      maximum invalid entries
  2 - 10                       1
  From 11 and above       10 % of total of entries
```

You do not have to round the results.

(When you finish this kata, Geometric Mean II will be waiting you. http://www.codewars.com/kata/56ec6016a9dfe3346e001242)

## My Solution

**JavaScript**

```js
const geometricMeanI = (arr) => {
  const filtered = arr.filter((v) => typeof v !== 'string' && v >= 0);
  const invalidCount = arr.length - filtered.length;
  const geometricMean = filtered.reduce((acc, cur) => acc * cur, 1) ** (1 / filtered.length);

  if ((invalidCount > 1 && arr.length < 10) || (invalidCount >= 0.1 * arr.length && arr.length > 10)) return 0;

  return geometricMean;
};
```

**Python**

```py
def geometric_meanI(arr):
    valid_values = [x for x in arr if type(x) == int and x >= 0]
    invalid_count = len(arr) - len(valid_values)
    product = 1
    for x in valid_values:
        product *= x
    geometric_mean = product ** (1 / len(valid_values))

    if (invalid_count > 1 and len(arr) <= 10) or (invalid_count > 0.1 * len(arr) and len(arr) > 10): return 0
    return geometric_mean;
```
