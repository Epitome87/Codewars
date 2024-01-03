# [Calculate Average](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)

## Description

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

## My solution

**JavaScript**

```js
const find_average = (array) => array.reduce((acc, cur) => acc + cur, 0) / array.length || 0;
```

**Python**

```py
def find_average(numbers):
    return sum(numbers) / len(numbers) if numbers else 0
```

### User Solution

**Python**

```py
def find_average(array):
    try:
        return sum(array) / len(array)
    except ZeroDivisionError:
        return 0
```

```py
def find_average(array):
    return sum(array) / (len(array) or 1)
```
