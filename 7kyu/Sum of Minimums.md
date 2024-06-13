# [Sum of Minimums](https://www.codewars.com/kata/5d5ee4c35162d9001af7d699)

## Description

Given a 2D ( nested ) list ( array, vector, .. ) of size m \* n, your task is to find the sum of the minimum values in each row.

For Example:

```js
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
```

So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

## My Solution

**JavaScript**

```js
const sumOfMinimums = (arr) => arr.reduce((acc, cur) => acc + Math.min(...cur), 0);
```

```js
const sumOfMinimums = (arr) => arr.map((v) => Math.min(...v)).reduce((acc, cur) => acc + cur, 0);
```

```js
const sumOfMinimums = (arr) => {
  // Find min in each row
  const mins = [];

  arr.forEach((row) => mins.push(Math.min(...row)));

  // Sum all the mins
  return mins.reduce((acc, cur) => acc + cur, 0);
};
```

**Python**

```py
def sum_of_minimums(numbers):
    return sum(min(x) for x in numbers)
```

### User Solution

**Python**

```py
def sum_of_minimums(numbers):
    return sum(map(min, numbers))
```
