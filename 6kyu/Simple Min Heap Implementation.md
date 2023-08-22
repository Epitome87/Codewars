# [Simple Min Heap Implementation](https://www.codewars.com/kata/53a71e153d87ddcb34000d20)

## Description

**Heap**

Heap is a data structure, that takes elements in arbitrary order, and returns them in a sorted order one by one.

**Implementing a min heap**

In this kata, we will implement a min heap, it is going to have 2 methods:

push

Takes a value and adds it to a heap

pop

Finds the smallest value in the heap, removes it from the heap, and returns it

```js
var heap = new MinHeap();
heap.push(4);
heap.push(1);
heap.push(7);
heap.push(9);
heap.push(2);
console.log(heap.pop()); // 1
console.log(heap.pop()); // 2
console.log(heap.pop()); // 4
console.log(heap.pop()); // 7
console.log(heap.pop()); // 9
```

Please note that for this kata we do not assess the efficiency of your implementation, so anything that acts like a heap will pass the tests.

You can read more about heap [wikipedia](https://en.wikipedia.org/wiki/Heap_%28data_structure%29)

## My Solution

**JavaScript**

```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    return ([this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]);
  }

  leftChild(index) {
    return this.heap[2 * index + 1];
  }

  rightChild(index) {
    return this.heap[2 * index + 2];
  }

  push(data) {
    let curIdx = this.heap.push(data) - 1;
    let parIdx = ((curIdx - 1) / 2) ^ 0;

    while (curIdx > 0 && this.heap[curIdx] < this.heap[parIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = ((curIdx - 1) / 2) ^ 0;
    }
  }

  pop() {
    if (!this.heap.length) return undefined;

    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let idx = 0;
    while (2 * idx + 1 < this.heap.length) {
      let smallerChildIndex = 2 * idx + 1;
      if (2 * idx + 2 < this.heap.length && this.rightChild(idx) < this.leftChild(idx)) {
        smallerChildIndex = 2 * idx + 2;
      }
      if (this.heap[idx] >= this.heap[smallerChildIndex]) this.swap(idx, smallerChildIndex);
      else break;
      idx = smallerChildIndex;
    }
    return min;
  }
}
```

### User Solution

**JavaScript**

```js
// Cheesy solution
function MinHeap() {
  this.stack = [];
}

MinHeap.prototype.push = function (n) {
  this.stack.push(n);
  this.stack.sort(function (a, b) {
    return b - a;
  });
};

MinHeap.prototype.pop = function () {
  return this.stack.pop();
};
```

```js
function MinHeap(elems) {
  // Binary Heap
  var q = [undefined];
  this.push = function (h) {
    var i = q.length,
      j;
    while ((j = (i / 2) | 0) && q[j] > h) q[i] = q[(i = j)];
    q[i] = h;
    return this;
  };
  this.pop = function () {
    if (q.length == 2) return q.pop();
    else if (q.length > 2) {
      var r = q[1],
        i = 1,
        t = q.pop(),
        j;
      while ((j = i * 2) < q.length) {
        if (j < q.length && q[j] > q[j + 1]) j++;
        if (t <= q[j]) break;
        q[i] = q[(i = j)];
      }
      q[i] = t;
      return r;
    }
  };
  if (Object.prototype.toString.call(elems) === '[object Array]') elems.forEach(this.push);
}
```
