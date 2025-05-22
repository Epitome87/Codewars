# [String to List of Integers](https://www.codewars.com/kata/5727868888095bdf5c001d3d)

## Description

Given a string containing a list of integers separated by commas, write the function that takes said string and returns a new array / list containing all integers present in the string, preserving the order.

Please note that there can be one or more consecutive commas whithout numbers, like so:

    "-1,-2,,,,,,3,4,5,,6"

For example

    "-1,-2,3,-4,-5"   --> [-1,-2,3,-4,-5]
    "1,2,3,,,4,,5,,," --> [1,2,3,4,5]
    ",,,,,,,"         --> []

## My Solution

**JavaScript**

```js
const stringToIntArray = (s) =>
  s
    .split(',')
    .filter((c) => c !== '')
    .map(Number);
```

**Python**

```py
def string_to_int_list(s):
    return [int(c) for c in s.split(',') if c != '']
```
