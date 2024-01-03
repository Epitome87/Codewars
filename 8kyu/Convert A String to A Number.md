# [Convert a String to a Number!](https://www.codewars.com/kata/544675c6f971f7399a000e79)

## Description

Note: This kata is inspired by Convert a Number to a String!. Try that one too.

**Description**

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

**Examples**

```
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
```

## My Solution

**JavaScript**

```js
const stringToNumber = (str) => Number(str);
```

```js
const stringToNumber = (str) => parseInt(str);
```

**Python**

```py
def string_to_number(s):
    return int(s)
```

## Takeaways

1. Be careful with this, since some implementations of parseInt don't default to using base 10 radix, which can produce odd results such as strToNumber('08') === 0. You should always provide a radix as a second argument (usually 10).
