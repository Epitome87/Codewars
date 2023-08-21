# [Linked Lists - Get Nth Node](https://www.codewars.com/kata/55befc42bfe4d13ab1000007)

## Description

Implement a `GetNth()` function that takes a linked list and an integer index and returns the node stored at the Nth index position. `GetNth()` uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, `GetNth(1)` should return Node(13);

```js
getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2
```

The index should be in the range `[0..length-1]`. If it is not, or if the list is empty, `GetNth()` should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).

## My Solution

**JavaScript**

```js
function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (!node) throw new Error();

  for (let i = 0; i < index; i++) {
    node = node.next;
    if (!node) throw new Error();
  }

  return node;
}
```

### User Solution

**JavaScript**

```js
function getNth(node, index) {
  if (!node) throw new Error('Invalid node at ' + index);
  return index === 0 ? node : getNth(node.next, index - 1);
}
```

```js
function Node(data) {
  this.data = data;
  this.next = null;
}
```
