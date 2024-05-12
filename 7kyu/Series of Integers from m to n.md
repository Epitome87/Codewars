# [Series of Integers from M to N](https://www.codewars.com/kata/5841f680c5c9b092950001ae)

## Description

**Task**

Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

**Input**

Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

**Example**

```js
generateIntegers(2, 5); // --> [2, 3, 4, 5]
```

## My Solution

**JavaScript**

```js
const generateIntegers = (m, n) => [...Array(n - m + 1).keys()].map((_, i) => i + m);
```

```js
const generateIntegers = (m, n) => Array.from({ length: n - m + 1 }, (_, i) => i + m);
```

**Python**

```py
def generate_integers(m, n):
    return [i for i in range(m, n + 1)]
```

### User Solution

**JavaScript**

```js
function generateIntegers(m, n) {
  return Array(n - m + 1)
    .fill()
    .map(() => m++);
}
```
