# [Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)

## Description

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

## My Solution

**JavaScript**

```js
const removeChar = (str) => str.slice(1, -1);
```

```js
const removeChar = (str) => str.substring(1, str.length - 1);
```

**Python**

```py
def remove_char(s):
    return s[1:-1]
```
