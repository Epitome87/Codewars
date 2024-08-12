# [Printing Array Elements with Comma Delimiters](https://www.codewars.com/kata/56e2f59fb2ed128081001328)

## Description

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

## My Solution

**JavaScript**

```
const printArray = (array) => array.join();
```

```js
const printArray = (array) => array.join(',');
```

**Python**

```py
def print_array(arr):
    return ','.join(map(str, arr))
```

```py
def print_array(arr):
    return ','.join(str(x) for x in arr)
```

## Takeaways

1. By default, `join()` in JavaScript separates elements with an '`,`', so we don't have to pass it as an argument.
