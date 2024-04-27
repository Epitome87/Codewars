# [Zip It!](https://www.codewars.com/kata/56aaf25213edd3a88a000002)

## Description

Write

```js
Array.prototype.zip = function (arr, fn) {};
```

that merges the corresponding elements of two sequences using a specified selector function fn (a block in Ruby)

For example:

```js
var a = [1, 2, 3, 4, 5];
var b = ['a', 'b'];
a.zip(b, (a, b) => a + b) === ['1a', '2b'];

var a = [1, 2, 3, 4, 5];
var b = ['a', 'b', 'c', 'd', 'e'];
a.zip(b, (a, b) => a + b.charCodeAt(0)) === [98, 100, 102, 104, 106];
```

if arrays have different lengths, go up to the minimum length and then stop.

## My Solution

**JavaScript**

```js
Array.prototype.zip = function (arr, fn) {
  return this.slice(0, arr.length).map((el, idx) => fn(el, arr[idx]));
};
```

```js
Array.prototype.zip = function (arr, fn) {
  return this.map((el, idx) => fn(el, arr[idx])).slice(0, Math.min(this.length, arr.length));
};
```

**Python**

```py
def lstzip(a, b, fn):
    return [fn(a[i], b[i]) for i in range(min(len(a), len(b)))]
```

### User Solution

**Python**

```py
def lstzip(a, b, fn):
    return [fn(*c) for c in zip(a, b)]
```

```py
def lstzip(a, b, fn):
    return list(map(fn, a, b))
```
