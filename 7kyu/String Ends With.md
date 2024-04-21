# [String Ends With](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)

## Description

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

```js
solution('abc', 'bc'); // returns true
solution('abc', 'd'); // returns false
```

## My Solution

**JavaScript**

```js
const solution = (str, ending) => str.endsWith(ending);
```

**Python**

```py
def solution(text, ending):
    return text.endswith(ending)
```
