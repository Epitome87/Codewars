# [Palindrome Strings](https://www.codewars.com/kata/57a5015d72292ddeb8000b31)

## Description

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

**Examples (Input ==> Output)**

    "anna"   ==> true
    "walter" ==> false
    12321    ==> true
    123456   ==> false

## User Solution

**JavaScript**

```js
const isPalindrome = (line) => String(line) == String(line).split('').reverse().join('');
```
