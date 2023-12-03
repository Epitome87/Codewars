# [All Star Code Challenge #3](https://www.codewars.com/kata/58640340b3a675d9a70000b9)

## Description

Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

```js
removeVowels('drake'); // => "drk"
removeVowels('aeiou'); // => ""
```

## My Solution

```js
const removeVowels = (str) => str.replace(/[aeoiu]/gi, '');
```
