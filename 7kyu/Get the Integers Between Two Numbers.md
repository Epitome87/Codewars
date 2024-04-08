# [Get the Integers Between Two Numbers](https://www.codewars.com/kata/598057c8d95a04f33f00004e)

## Description

Build a function that can get all the integers between two given numbers.

Example:

`(2,9)`

Should give you this output back:

`[ 3, 4, 5, 6, 7, 8 ]`

If startNum is the same as endNum, return an empty array.

## My Solution

**JavaScript**

```js
const range = (startNum, endNum) => Array.from({ length: endNum - startNum - 1 }, (_, i) => startNum + 1 + i);
```

```js
const range = (startNum, endNum) => [...Array(endNum - startNum - 1)].map((_, i) => startNum + 1 + i);
```

**Python**

```py
def function(start_num, end_num):
    return list(range(start_num + 1, end_num))
```

### User Solution

**JavaScript**

```js
range = (a, b) => [...Array(b).keys()].slice(a + 1);
```
