# [Binary Tree Compare](https://www.codewars.com/kata/55847fcd3e7dadc9f800005f)

## Description

Given the node object:

```
Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null
```

write a function `compare(a, b)` which compares the two trees defined by Nodes a and b and returns true if they are equal in structure and in value and false otherwise.

Examples:

```
1       1
| \     | \
2  3    2  3
=> true

1       1
| \     | \
3  3    2  3
=> false (values not the same 2 != 3)

1       1
| \     |
2  3    2
        |
        3
=> false (structure not the same)
```

## My Solution

**JavaScript**

```js
const compare = (a, b) => (a && b ? a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right) : !a && !b);
```

```js
const compare = (a, b) => {
  if (a && b) {
    return a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);
  }
  return !a && !b;
};
```

### User Solution

**JavaScript**

```js
function compare(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
```

```js
function compare(a, b) {
  return !a || !b ? a == b : a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);
}
```

```js
function compare(a, b) {
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  if (a.val !== b.val) return false;
  return compare(a.left, b.left) && compare(a.right, b.right);
}
```

```js
function compare(a, b) {
  if (a === null || b === null) {
    return a === b;
  }
  return a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);
}
```

## Takeaways

1. For cheeky solution of complex comparisons, consider `JSON.stringify()` and compare!
