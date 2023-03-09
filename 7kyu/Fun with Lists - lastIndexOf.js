/*
Implement the method lastIndexOf (last_index_of in PHP and Python), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null/None and can hold any type of value.

Good luck!

This kata is part of fun with lists series:

Fun with lists: length
Fun with lists: indexOf
Fun with lists: lastIndexOf
Fun with lists: countIf
Fun with lists: anyMatch + allMatch
Fun with lists: filter
Fun with lists: map
Fun with lists: reduce
*/

// My solution:
const lastIndexOf = (head, value) => {
  let index = 0;
  let current = head;
  const arr = [];

  while (current !== null) {
    arr.push(current.data);
    current = current.next;
    index++;
  }

  while (index-- >= 0) {
    if (arr.pop() === value) return index;
  }

  return -1;
};

// Top user solution:
function lastIndexOf(head, value) {
  const list = (node) => (node ? [node.data, ...list(node.next)] : []);
  return list(head).lastIndexOf(value);
}

// Another good user solution:
function lastIndexOf(head, value) {
  let i = 0,
    found = -1;
  while (head) {
    if (value === head.data) found = i;
    i++;
    head = head.next;
  }
  return found;
}
