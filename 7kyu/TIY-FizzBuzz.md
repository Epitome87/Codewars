# [TIY-FizzBuzz](https://www.codewars.com/kata/5889177bf148eddd150002cc)

## Description

In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

- If a letter is a upper case consonants, replace that character with "Iron".
- If a letter is a lower case consonants or a non-alpha character, do nothing to that character
- If a letter is a upper case vowel, replace that character with "Iron Yard".
- If a letter is a lower case vowel, replace that character with "Yard".

## My Solution

**JavaScript**

```js
const tiyFizzBuzz = (sentence) => {
  return [...sentence].reduce((acc, curr) => {
    if (/[B-DF-HJ-NP-TV-Z]/.test(curr)) acc += 'Iron';
    else if (/[AEIOU]/.test(curr)) acc += 'Iron Yard';
    else if (/[aeiou]/.test(curr)) acc += 'Yard';
    else acc += curr;
    return acc;
  }, '');
};
```

```js
const tiyFizzBuzz = (sentence) => {
  let result = '';

  for (let char of sentence) {
    if (/[B-DF-HJ-NP-TV-Z]/.test(char)) result += 'Iron';
    else if (/[AEIOU]/.test(char)) result += 'Iron Yard';
    else if (/[aeiou]/.test(char)) result += 'Yard';
    else result += char;
  }

  return result;
```

### User Solution

**JavaScript**

```js
const tiyFizzBuzz = (sentence) =>
  sentence.replace(/[A-Zaeiou]/g, (val) => (/[AEIOU]/.test(val) ? `Iron Yard` : /[aeiou]/.test(val) ? `Yard` : `Iron`));
```
