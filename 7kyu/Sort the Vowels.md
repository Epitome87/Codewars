# [Sort the Vowels!](https://www.codewars.com/kata/59e49b2afc3c494d5d00002a)

## Description

In this kata, we want to sort the vowels in a special format.

Write a function which takes a input string s and return a string in the following way:

```
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|
```

Notes:

- List all the Vowels on the right side of |
- List every character except Vowels on the left side of |
- for the purpose of this kata, the vowels are : a e i o u
- Return every character in its original case
- Each line is separated with \n
- Invalid input ( undefined / null / integer ) should return an empty string

## My Solution

**JavaScript**

```js
const sortVowels = (s) =>
  typeof s === 'string' ? [...s].map((c) => (/[aeiou]/i.test(c) ? `|${c}` : `${c}|`)).join('\n') : '';
```
