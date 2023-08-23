# [Sum the Tree](https://www.codewars.com/kata/5800580f8f7ddaea13000025)

## Description

Given a node object representing a binary tree:

```
Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
```

write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

```
10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3
```

## My Solution

**JavaScript**

```js
const sumTheTreeValues = (root) => (root ? root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right) : 0);
```

```js
const sumTheTreeValues = (root) => {
  const stack = [root];
  let sum = 0;

  while (stack.length) {
    const current = stack.pop();

    sum += current.value;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return sum;
};
```
