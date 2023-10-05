# [Is My String Repeating the Same Character Over and Over?](https://www.codewars.com/kata/584fa5ae25dd087e6b000070)

## Description

Your task is very simple:
Write a function hasOneChar returning:

- true if the given string contains the same character repeated all along the string
- false otherwise.

For instance:

```js
hasOneChar('aaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false
```

Of course, what comes in mind first is a loop. But the purpose of this Kata is to test your creativity.

You have to achieve it without using any loops.

Corner cases: the function hasOneChar should return true if the string contains one single character.

Be creative!

## My Solution

**JavaScript**

```js
const hasOneChar = (s) => new Set(s).size === 1;
```

### User Solution

**JavaScript**

```js
const hasOneChar = (s) => /^(.)\1*$/.test(s);
```
