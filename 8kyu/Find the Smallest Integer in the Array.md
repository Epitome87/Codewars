# [Find the Smallest Integer in the Array](https://www.codewars.com/kata/55a2d7ebe362935a210000b2)

## Description

Given an array of integers your solution should find the smallest integer.

For example:

- Given [34, 15, 88, 2] your solution will return 2
- Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

## My Solution

**Python**

```py
def find_smallest_int(arr):
    smallest = float('inf')
    for i in arr:
        if i < smallest:
            smallest = i
    return smallest
```

### User Solution

**Python**

```py
def findSmallestInt(arr):
    return min(arr)
```

```py
def findSmallestInt(arr):
    arr.sort()
    return arr[0]
```

```py
findSmallestInt = min
```
