# [Sorted Union](https://www.codewars.com/kata/5729c30961cecadc4f001878)

## Description

Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

## My Solution

**JavaScript**

```js
const uniteUnique = (...arrays) => [...new Set(arrays.flat())];
```

```js
const uniteUnique = (...arrays) => {
  const map = {};
  return arrays.flat(Infinity).reduce((acc, cur) => {
    if (!map[cur]) {
      map[cur] = true;
      acc.push(cur);
    }
    return acc;
  }, []);
};
```

```js
const uniteUnique = (...arrays) => {
  const map = {};
  const result = [];
  for (let arr of arrays) {
    for (let el of arr) {
      if (!map[el]) {
        result.push(el);
        map[el] = true;
      }
    }
  }
  return result;
};
```

### User Solution

**JavaScript**

```js
function uniteUnique(...lsts) {
  let args = [].concat(...lsts);
  return args.filter((arg, i) => args.indexOf(arg) == i);
}
```
