# [Filling An Array (Part 1)](https://www.codewars.com/kata/571d42206414b103dc0006a1)

## Description

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

```
arr(5) // => [0,1,2,3,4]
```

Note: The parameter is optional. So you have to give it a default value.

## My Solution

**JavaScript**

```js
const arr = (n = 0) => [...Array(n).keys()];
```

```js
const arr = (n) => Array.from({ length: n }, (_, i) => i);
```

```js
const arr = (n = 0) =>
  Array(n)
    .fill()
    .map((_, idx) => idx);
```

**Python**

```py
def arr(n = 0):
    return [x for x in range(n)]
```
