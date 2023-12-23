# [Sum the Strings](https://www.codewars.com/kata/5966e33c4e686b508700002d)

## Description

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

```
"4", "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
```

Notes:

- If either input is an empty string, consider it as zero.
- Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

## My Solution

**JavaScript**

```js
const sumStr = (a, b) => `${+a + +b}`;
```

```js
const sumStr = (a, b) => (Number(a) + Number(b)).toString();
```

**Python**

```py
def sum_str(a, b):
    if a == "":  a = 0
    if b == "": b = 0
    return str(int(a) + int(b))
```

### User Solution

**Python**

```py
def sum_str(a, b):
    return str(int(a or 0) + int(b or 0))
```
