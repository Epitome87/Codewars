# [Hamming Distance](https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69)

## Description

The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

Examples:

```
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2
```

You can assume that the two inputs are ASCII strings of equal length.

## My Solution

**JavaScript**

```js
const hamming = (a, b) => [...a].reduce((acc, cur, idx) => acc + (cur !== b[idx]), 0);
```

```js
const hamming = (a, b) => [...a].reduce((acc, cur, idx) => (cur !== b[idx] ? acc + 1 : acc), 0);
```

**Python**

```py
def hamming(a, b):
    return sum(x != y for x, y in zip(a, b))
```
