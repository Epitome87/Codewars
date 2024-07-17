# [Failed Sort - Bug Fixing #4](https://www.codewars.com/kata/55c7f90ac8025ebee1000062)

## Description

Oh no, Timmy's Sort doesn't seem to be working?
Your task is to fix the sortArray function to sort all numbers in ascending order

Starting JavaScript code:

```js
var sortArray = function (value) {
  return value
    .split('')
    .sort((c, p) => c / p)
    .join('');
};
```

Starting Python code;

```py
def sort_array(value):
    return ''.join(sorted(value, key=lambda a: -int(a)))
```

## My Solution

**JavaScript**

```js
const sortArray = (value) => [...value].sort((a, b) => a - b).join('');
```

**Python**

```py
def sort_array(value):
    return ''.join(sorted(value))
```

```py
def sort_array(value):
    return ''.join(sorted(value, key=lambda a: int(a)))
```
