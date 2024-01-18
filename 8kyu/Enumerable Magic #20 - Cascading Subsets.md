# [Enumerable Magic #20 - Cascading Subsets](https://www.codewars.com/kata/545af3d185166a3dec001190)

## Description

Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

```
each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
```

As you can see, the lists are cascading; ie, they overlap, but never out of order.

## My Solution

**JavaScript**

```js
const eachCons = (arr, n) => {
  const result = [];

  for (let i = 0; i < arr.length - n + 1; i++) {
    result.push(arr.slice(i, i + n));
  }

  return result;
};
```

```js
const eachCons = (arr, n) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const subArr = [];
    for (let j = 0; j < n; j++) {
      let index = i + j;
      if (index >= arr.length) return res;
      subArr.push(arr[index]);
    }
    res.push(subArr);
  }
  return res;
};
```

**Python**

```py
def each_cons(list, n):
    return [list[i:i+n] for i in range(len(list) - n + 1)]
```

```py
def each_cons(list, n):
    result = []
    for i in range(len(list) - n + 1):
        result.append(list[i:i+n])
    return result
```
