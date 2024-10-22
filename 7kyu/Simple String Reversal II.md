# [Simple String Reversal II](https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac)

## Description

n this Kata, you will be given a string and two indexes (`a` and `b`). Your task is to reverse the portion of that string between those two indices inclusive.

    solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
    solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.

Input will be lowercase and uppercase letters only.

The first index `a` will always be lower that than the string length; the second index `b` can be greater than the string length. More examples in the test cases. Good luck!

## My Solution

**JavaScript**

```js
const solve = (str, a, b) =>
  str.slice(0, a) +
  [...str]
    .slice(a, b + 1)
    .reverse()
    .join('') +
  str.slice(b + 1);
```

**Python**

```py
def solve(st, a, b):
    return st[0:a] + st[a:b+1][::-1] + st[b + 1:]
```
