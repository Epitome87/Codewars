# [Minimum Ticket Cost](https://www.codewars.com/kata/5bdc1558ab6bc57f47000b8e)

## Description

A few years ago, **Aaron** left his old school and registered at another due to security reasons. Now he wishes to find **Jane**, one of his schoolmates and good friends.

There are `n` schools numbered from 1 to `n`. One can travel between each pair of schools by buying a ticket. The ticket between schools `i` and `j` costs `(i + j) modulo (n + 1)` and can be used multiple times. Help **Aaron** find the minimum total cost to visit all schools. He can start and finish at any school.

**Range : 1 ≤ n ≤ 10^6**

## My Solution

**JavaScript**

```js
const findJane = (n) => Math.ceil(n / 2) - 1;
```

```js
const findJane = (n) => Math.floor((n - 1) / 2);
```

**Python**

```py
def find_jane(n):
    return (n - 1) // 2
```

### User Solution

**JavaScript**

```js
function findJane(n) {
  let result = 0;

  for (let index = 1; index < n; index++) {
    result += index % 2 == 0;
  }

  return result;
}
```

## Takeaways

1.  The best route is:

```
    route: 1 → n → 2 → n-1 → 3 → n-2 → ...
    costs:   0   1   0     1   0     1 ...
```
