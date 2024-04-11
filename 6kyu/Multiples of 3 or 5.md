# [Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006)

## Description

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

## My Solution

**JavaScript**

```js
const solution = (number) =>
  Array.from({ length: number }, (_, i) => i).reduce((sum, v) => sum + (!(v % 3 && v % 5) ? v : 0), 0);
```

```js
const solution = (number) =>
  Array.from({ length: number }, (_, i) => i)
    .filter((v) => !(v % 3 && v % 5))
    .reduce((acc, cur) => acc + cur, 0);
```

```js
const solution = (number) => {
  const multiples = [];

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) multiples.push(i);
  }

  return multiples.reduce((acc, cur) => acc + cur, 0);
};
```

**Python**

```py
def solution(number):
    return sum(i if not (i % 3 and i % 5) else 0 for i in range(number))
```

### User Solution

**Python**

```py
def solution(number):
    return sum(x for x in range(number) if not (x % 3 and x % 5))
```

## Takeaways

1. Note the user's Python solution, and the order of operations in their list comprehension. By specifying the logical condition last, we seemingly can avoid needing the otherwise-required `else` condition.
