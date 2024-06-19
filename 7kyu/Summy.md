# [Summy](https://www.codewars.com/kata/599c20626bd8795ce900001d)

## Description

Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

**Example**

```
summy("1 2 3")  ==> 6
```

## My Solution

**JavaScript**

```js
const summy = (stringOfInts) => stringOfInts.split(' ').reduce((sum, cur) => sum + Number(cur), 0);
```

**Python**

```py
def summy(string_of_ints):
    return sum(int(x) for x in string_of_ints.split(' '))
```
