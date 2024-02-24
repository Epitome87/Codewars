# [Unfinished Loop - Bug Fixing #1](https://www.codewars.com/kata/55c28f7304e3eaebef0000da)

## Description

Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

Starting (bugged) code:

```js
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; ) {
    newArray.push(counter);
  }

  return newArray;
}
```

## My Solution

**JavaScript**

```js
const createArray = (num) => Array.from({ length: num }, (_, i) => i + 1);
```

```js
function createArray(number) {
  const newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}
```

**Python**

```py
def create_array(n):
    return [i + 1 for i in range(n)]
```
