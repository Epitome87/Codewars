# [Palindromes Here and There](https://www.codewars.com/kata/5838a66eaed8c259df000003)

## Description

An array is given with palindromic and non-palindromic numbers. A _palindromic_ number is a number that is the same from a reversed order. For example `122` is not a palindromic number, but `202` is one.

Your task is to write a function that returns an array with only `1`s and `0`s, where all palindromic numbers are replaced with a `1` and all non-palindromic numbers are replaced with a `0`.

For example:

    [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
    [45, 21, 303, 56]        ==>  [0, 0, 1, 0]

**JavaScript**

```js
const convertPalindromes = (numbers) => numbers.map((n) => +(n == [...`${n}`].reverse().join('')));
```

```js
const convertPalindromes = (numbers) => {
  const isPalindrome = (num) => num.toString() === [...num.toString()].reverse().join('');
  return numbers.map((num) => +isPalindrome(num));
};
```

**Python**

```py
def convert_palindromes(numbers):
    return [int(str(n) == str(n)[::-1]) for n in numbers]
```
