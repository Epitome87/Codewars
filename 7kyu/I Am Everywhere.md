# [I'm Everywhere!](https://www.codewars.com/kata/6097a9f20d32c2000d0bdb98)

## Description

**Overview**

Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

**Task:**

Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

1. The word should not begin with the letter "I", for example Inspire.
2. The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
3. The first letter should not be lowercase, for example road.

If the word does not meet the rules, we return "Invalid word".

## My Solution

**JavaScript**

```js
const i = (word) => {
  const numConsonant = (word.match(/[^aeiou]/gi) || []).length;
  const numVowel = (word.match(/[aeiou]/gi) || []).length;
  const invalidStart = /^[a-z]|I/.test(word);

  return !word || numVowel >= numConsonant || invalidStart ? 'Invalid word' : `i${word}`;
};
```

### User Solution

**JavaScript**

```js
function i(word) {
  if (/^[a-zI]/.test(word) || word.replace(/[^aeiou]/gi, '').length * 2 >= word.length) return 'Invalid word';
  return 'i' + word;
}
```
