# [Is it a Letter?](https://www.codewars.com/kata/57a06b07cf1fa58b2b000252)

## Description

Write a function, `isItLetter` or `is_it_letter` or `IsItLetter`, which tells us if a given character is a letter or not.

## My Solution

**JavaScript**

```js
const isItLetter = (character) => /[a-z]/i.test(character);
```

**Python**

```py
def is_it_letter(s):
    return s.isalpha()
```
