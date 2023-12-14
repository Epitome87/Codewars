# [Find the K-th Last Element of a Singly Linked List](https://www.codewars.com/kata/5810d8ce2956d78698000032)

## Description

Write a function that given the head of singly linked list, and an index (0 based) counted from the end of the list, returns the element corresponding to that index.

The function must return a falsy value for invalid input values, like an out of range index.

So for the list 66 -> 42 -> 13 -> 666, getKthLastElement() with index 2 should return the Node (predefined object for list nodes) corresponding to 42.

Other examples:

```
getKthLastElement(1 -> 2 -> 3 -> null, 0).data === 3
getKthLastElement(1 -> 2 -> 3 -> null, 1).data === 2
```

## My Solution

**JavaScript**

```js
const getKthLastElement = (head, k) => {
  if (k < 0) return null;

  let a = head;
  let b = head;

  for (let i = 0; i < k; i++) b = b.next;

  if (!b) return null;

  while (b.next) {
    b = b.next;
    a = a.next;
  }

  return a;
};
```

### User Solution

**JavaScript**

```js
function getKthLastElement(head, k) {
  for (var tail = head, r = []; tail != null; tail = tail.next) r.unshift(tail);
  return r[k];
}
```
