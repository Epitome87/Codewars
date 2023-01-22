/*
Implement the methods anyMatch (any_match in PHP) & allMatch (all_match in PHP), which accepts a linked list (head) and a predicate function, and returns true if any / all of the elements apply to the given predicate.

For example:

Given the list: 1 -> 2 -> 3, and the predicate x => x > 1, anyMatch / any_match should return true (both 2 & 3 are valid for this predicate), and allMatch / all_match should return false (1 is not valid for this predicate)

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

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
const anyMatch = (head, p) => {
  let current = head;
  while (current) {
    if (p(current.data)) return true;
    current = current.next;
  }
  return false;
};

const allMatch = (head, p) => {
  let current = head;
  while (current) {
    if (!p(current.data)) return false;
    current = current.next;
  }
  return true;
};

// Clever user solution (have to traverse full list though):
const anyMatch = (head, p) => (head ? p(head.data) || anyMatch(head.next, p) : false);
const allMatch = (head, p) => (head ? p(head.data) && allMatch(head.next, p) : true);

// Better version of my solution:
function anyMatch(head, p) {
  while (head) {
    if (p(head.data)) return true;
    head = head.next;
  }
  return false;
}

function allMatch(head, p) {
  while (head) {
    if (!p(head.data)) return false;
    head = head.next;
  }
  return true;
}

// Another good user solution:
function anyMatch(head, p) {
  for (; head; head = head.next) {
    if (p(head.data)) return true;
  }
  return false;
}

function allMatch(head, p) {
  return !anyMatch(head, (x) => !p(x));
}

/* Takeaways:
1) No reason to declare a 'current' variable: simply change what head is!
2) Notice the unconventional way the last user uses the for-loop. We don't need an initial condition, and our iterator is just updating what head is!
*/
