# [Binary Tree Search (Not BST)](https://www.codewars.com/kata/5acc79efc6fde7838a0000a0)

## Description

Given a number and a binary tree ( not a Binary Search Tree! ):

- return True/true if the given number is in the tree
- return False/false if it isn't

Each node in the binary tree is either of this Node class or null:

```js
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
```

## My Solution

**JavaScript**

```js
const search = (n, root) => (!root ? false : root.value === n ? true : search(n, root.left) || search(n, root.right));
```

```js
const search = (n, root) => {
  if (!root) return false;
  if (root.value === n) return true;
  return search(n, root.left) || search(n, root.right);
};
```

### User Solution

**JavaScript**

```js
function search(n, root) {
  const stack = root ? [root] : []
  const values = []

  while (stack.length) {
    const current = stack.pop()

    values.push(current.value)

    if (current.left) {
     stack.push(current.left)
    }

    if (current.right) {
     stack.push(current.right)
    }
  }


  return values.includes(n)
```

```js
function search(n, root) {
  if (!root) return false;

  let queue = [];
  let node = root;

  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    if (node.value === n) return true;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false;
}
```
