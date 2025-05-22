# [Format to the 2nd](https://www.codewars.com/kata/58311faba317216aad000168)

## Description

Given some positive integers, I wish to print the integers such that all take up the same width by adding a minimum number of leading zeroes. No leading zeroes shall be added to the largest integer.

For example, given `1, 23, 2, 17, 102`, I wish to print out these numbers as follows:

    001
    023
    002
    017
    102

Write a function that takes a variable number of integers and returns the string to be printed out.

## My Solution

**JavaScript**

```js
const printNums = (...args) => {
  const maxWidth = args.reduce((acc, cur) => Math.max(acc, `${cur}`.length), 0);
  return args.map((n) => `${n}`.padStart(maxWidth, '0')).join('\n');
};
```

**Python**

```py
def print_nums(*args):
    if not args: return ''
    max_width = max(len(str(num)) for num in args)
    return '\n'.join([str(n).zfill(max_width) for n in args])
```

### User Solution

**Python**

```py
def print_nums(*num):
    return "\n".join([str(x).zfill(len(str(max(num)))) for x in num])
```
