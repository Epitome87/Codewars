# [Iterator Basics](https://www.codewars.com/kata/55aeee88ecebc5c9230000a0)

## Description

Iterator objects enable custom iteration like CLR IEnumerable or Java Iterable. Generalize for..in to custom iterator-based iteration with for..of. Don’t require realizing an array, enabling lazy design patterns like LINQ.

**Task**

Your task is simple, create a counter that increments by 1 each time. You must use the iterator described below. Good luck!

**Example**

```js
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0,
      cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur };
      },
    };
  },
};

for (let n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000) break;
  console.log(n);
}
```

Reading: [Iterators and Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

## My Solution

**JavaScript**

```js
let counter = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        return { done: false, value: ++count };
      },
    };
  },
};
```

### User Solution

**JavaScript**

```js
let counter = {
  *[Symbol.iterator]() {
    let i = 1;
    while (true) yield i++;
  },
};
```
