# [Calculate the Function F(x) for a Simple Linear Sequence (Medium)](https://www.codewars.com/kata/54784a99b5339e1eaf000807)

## Description

This is a follow-up from my previous Kata which can be found here: http://www.codewars.com/kata/5476f4ca03810c0fc0000098

This time, for any given linear sequence, calculate the function [f(x)] and return it as a function in Javascript or Lambda/Block in Ruby.

For example:

```
get_function([0, 1, 2, 3, 4])(5) => 5
get_function([0, 3, 6, 9, 12])(10) => 30
get_function([1, 4, 7, 10, 13])(20) => 61
Assumptions for this kata are:
```

```
The sequence argument will always contain 5 values equal to f(0) - f(4).
The function will always be in the format "nx +/- m", 'x +/- m', 'nx', 'x' or 'm'
If a non-linear sequence simply return 'Non-linear sequence' for javascript, ruby, and python. For C#, throw an ArgumentException.
```

## My Solution

**JavaScript**

```js
const getFunction = (sequence) => {
  const initial = sequence[0];
  const ratio = sequence[1] - initial;
  return sequence.slice(1).every((v, i) => v - sequence[i] === ratio)
    ? (n) => initial + n * ratio
    : 'Non-linear sequence';
};
```

**Python**

```py
def get_function(sequence):
    initial = sequence[0]
    ratio = sequence[1] - initial
    def fn(n): return initial + (ratio * n)
    return fn if all(x == initial + ratio * i for i, x in enumerate(sequence)) else "Non-linear sequence"
```
