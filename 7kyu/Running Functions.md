# [Running Functions](https://www.codewars.com/kata/58b42c98f4cdd62f45000c6e)

## Description

Task
Implement a function which receives a list of values lst and a function fn as its arguments, and returns a new list where the i-th element is the result of left-reducing the first i+1 elements of lst using fn.

Assuming lst[:n] syntax represents taking the first n elements of lst, the function which you should implement must produce the following result:

```js
[
  reduce(lst[:1], fn),
  reduce(lst[:2], fn),
  reduce(lst[:3], fn),
  // ...,
  reduce(lst, fn)
]
```

**Reduction**

Reduction - the process of combining a list of values into a single value using a function. Assuming lst[-1] represents accessing the last element of a list, the left-reduction is equivalent to the following pseudo-code:

```js
reduce(lst, fn) {
  result = lst[0]
  result = fn(result, lst[1])
  result = fn(result, lst[2])
  result = fn(result, lst[3])
  ...
  result = fn(result, lst[-1])
  return result
}
```

**Examples**

```js
running([1,1,1,1], add) = [1,2,3,4]
running([10,3,4,1], sub) = [10,7,3,2]
running([1,9,2,10], max) = [1,9,9,10]
running([1,9,2,10], min) = [1,1,1,1]
```

## My Solution

**JavaScript**

```js
const running = (list, fn) => list.map((v, i) => list.slice(0, i + 1).reduce((acc, cur) => fn(acc, cur)));
```

### User Solution

**JavaScript**

```js
function running(lst, fn) {
  return lst.map((e, i) => lst.slice(0, i + 1).reduce(fn));
}
```

```js
const running = (a, fn, z) => a.map((v, i) => (z = i ? fn(z, v) : v));
```

```js
function running(lst, fn) {
  var arr = [lst[0]];
  for (var i = 1; i < lst.length; ++i) arr.push(fn(arr[arr.length - 1], lst[i]));
  return arr;
}
```
