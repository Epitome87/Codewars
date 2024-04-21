# [Shortest Word](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9)

## Description

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

## My Solution

**JavaScript**

```js
const findShort = (s) => Math.min(...s.split(' ').map((word) => word.length));
```

**Python**

```py
def find_short(s):
    return min(len(word) for word in s.split())
```
