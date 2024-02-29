# [The reject() Function](https://www.codewars.com/kata/52988f3f7edba9839c00037d)

## Description

Implement a function which filters out array values which satisfy the given predicate.

```js
reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
```

## My Solution

**JavaScript**

```js
const reject = (arr, predicate) => arr.filter((n) => !predicate(n));
```

```js
const reject = (arr, predicate) => {
  const results = [];
  for (let el of arr) {
    if (!predicate(el)) results.push(el);
  }
  return results;
};
```

**Python**

```py
def reject(seq, predicate):
    return [x for x in seq if not predicate(x)]
```
