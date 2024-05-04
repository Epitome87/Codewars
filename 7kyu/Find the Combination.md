# [Find the Combination](https://www.codewars.com/kata/55c2a1ee7fe3ccfee5000058)

## Description

Your objective is to count how many times a certain word or combination of letters or symbols appears inside a string. The key is case insensitive and can occur as many or as few times in the string. The function declaration is provided for you and there should be two arguments with one return variable that returns the count. Overlapping words should not be counted more than once! An empty string cannot be a key. The function should also be able to count the number of integers and characters. Think hard!

Example:

```js
countCombinations('my name is billy and billy is awesome', 'billy'); // 2
countCombinations('abcdefghijklmonopolymonorailqrstuv', 'mono'); // 2
countCombinations('GrEggreGGREGgREG', 'greg'); // 4
countCombinations('@#$##@@@', '@'); // 4
countCombinations('wow nothing', 'yeah'); // 0
countCombinations('lololololol', 'lol'); // 3
countCombinations('93049', '\\d'); // 5
countCombinations('Five ', '.'); // 5
```

## My Solution

**JavaScript**

```js
const countCombinations = (string, key) => (string.match(new RegExp(key, 'gi')) || []).length;
```
