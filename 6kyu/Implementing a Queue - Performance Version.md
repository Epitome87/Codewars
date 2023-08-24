# [Implementing a Queue - Performance Version](https://www.codewars.com/kata/5a8bd383fd8c0664190000b6)

## Description

This kata is based on the kata Implementing a Queue by fvproductions. However, this kata suggests implementing a queue using an array and prepending and popping values. Since prepending values to an array requires the entire array to be rewritten, this can be very slow for large queues.

**Task**

Implement a queue which can enqueue and dequeue values in constant (O(1)) time. That is, regardless of how many items are currently in a queue, adding or removing a value takes the same amount of time.

As long as the specifications are followed, any implementation is acceptable.

**Specifications**

- Queue represents a "First-in, first-out" data structure in which items can be added using the "enqueue" method, and removed using the "dequeue" method. For example, if 1, 2, and 3 are added in three successive calls to "enqueue," 1 will be returned on the next call to "dequeue."
- Queue's constructor takes no arguments.
- Queue contains no static methods, and 3 prototype methods: "enqueue", "dequeue", "size."
- Queue.prototype.enqueue takes one argument of any type and adds it to the queue in O(1) time.
- Queue.prototype.dequeue takes no arguments and removes and returns the first item in the Queue in O(1) time. If no items are in the queue, this method returns undefined.
- Queue.prototype.size returns how many items are currently held in the queue in O(1) time.

## My Solution

**JavaScript**

```js
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex++] = item;
  }

  dequeue() {
    if (this.size() === 0) return;
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex++];
    return item;
  }

  size() {
    return this.tailIndex - this.headIndex;
  }
}
```

### User Solution

**JavaScript**

```js
class Queue {
  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    const node = { item, prev: null };
    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.count++;
  }

  dequeue() {
    const node = this.tail;
    if (node) {
      if (this.head === node) {
        this.head = null;
      }
      this.tail = node.prev;
      this.count--;
      return node.item;
    } else {
      return undefined;
    }
  }

  size() {
    return this.count;
  }
}
```

```js
function Queue() {
  this.i = 0;
  this.arr = [];
  this.size = (_) => this.arr.length - this.i;
  this.enqueue = (e) => this.arr.push(e);
  this.dequeue = (_) => (this.i < this.arr.length ? this.arr[this.i++] : undefined);
}
```
