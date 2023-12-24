# [To Square(root) or Not to Square(root)](https://www.codewars.com/kata/57f6ad55cca6e045d2000627)

## Description

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example

```
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
```

Notes

The input array will always contain only positive numbers, and will never be empty or null.

## My Solution

**JavaScript**

```js
const squareOrSquareRoot = (arr) => arr.map((v) => (v ** 0.5 % 1 ? v * v : v ** 0.5));
```

```js
const squareOrSquareRoot = (array) => array.map((n) => (Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n ** 2));
```

**Python**

```py
def square_or_square_root(arr):
    result = []
    for item in arr:
        result.append(item ** (2 if item ** 0.5 % 1 else 0.5))
    return result
```

```py
def square_or_square_root(arr):
    result = []
    for item in arr:
        if item ** 0.5 % 1:
            result.append(item ** 2)
        else:
            result.append(item ** 0.5)
    return result
```

### User Solution

**Python**

```py
def square_or_square_root(arr):
    return [i ** 0.5 if (i ** 0.5).is_integer() else i ** 2 for i in arr]
```
