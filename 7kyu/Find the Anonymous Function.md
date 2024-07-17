# [Find the Anonymous Function](https://www.codewars.com/kata/55a12bb8f0fac1ba340000aa)

## Description

Find the anonymous function in the given array and use the function to filter the array

**Input**

Your input. First Parameter will be an array with an anonymous function somewhere in the lot, The second Parameter will be an array which you will filter using the anonymous function you find.

**Output**

Your output. Output a filtered version of the second parameter using the function found in the first parameter.
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

**JavaScript**

```js
const FindFunction = (func, arr) => arr.filter(func.find((y) => typeof y === 'function'));
```

**Python**

```py
def find_function(func, arr):
    fn = next(x for x in func if callable(x))
    return [x for x in arr if fn(x)]
```

### User Solution

**Python**

```py
def find_function(func,arr):
    f = next(el for el in func if callable(el))
    return [*filter(f, arr)]
```
