# [Club Doorman](https://www.codewars.com/kata/5c563cb78dac1951c2d60f01)

## Description

**INTRODUCTION**

The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

Every given word has a doubled letter, like 'tt' in lettuce.

To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

It will be given only words with one doubled letter.

**EXAMPLE**

Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.
The answer to the Club Doorman is 20 \* 3 = 60

**TASK**

The function passTheDoorMan with a given string word shall return the right number.

## My Solution

**JavaScript**

```js
const passTheDoorMan = (word) => (word.match(/(\w)\1+/)[0].charCodeAt(0) - 96) * 3;
```
