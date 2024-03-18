# [Custom Sort Function](https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe)

## Description

Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

Example:

```
[1,3,2]  =>  [1,2,3]
```

## My Solution

**JavaScript**

```js
const sort = (items) => {
  const result = [...items];

  for (let i = 0; i < items.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < items.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }

    if (swapped === false) break;
  }

  return result;
};
```
