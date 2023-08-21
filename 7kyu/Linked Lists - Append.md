# [Linked Lists - Append](https://www.codewars.com/kata/55d17ddd6d7868493e000074)

## Description

Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.

```js
var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
```

If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

The push() and buildOneTwoThree() (build_one_two_three() in PHP and ruby) functions need not be redefined. The Node class is also predefined for you in PHP.

```php
/* PHP Only */
class Node {
  public $data, $next;
  public function __construct($data, $next = NULL) {
    $this->data = $data;
    $this->next = $next;
  }
}
```

## My Solution

**JavaScript**

```js
function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!listA && !listB) return null;
  if (listA && !listB) return listA;
  if (!listA && listB) return listB;

  let current = listA;
  while (current.next) {
    current = current.next;
  }

  current.next = listB;

  return listA;
}
```

### User Solution

**JavaScript**

```js
function append(listA, listB) {
  if (!a) return b;
  a.next = append(a.next, b);
  return a;
}
```
