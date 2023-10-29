# [Make the Small Words Big!](https://www.codewars.com/kata/57b4dd38d2a31c75f7000299)

## Description

Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...

Your task is to make all words which are 3 characters or less into capitals. You should also remove any vowels from 'long' (4 characters or more) words.

For example:

"The quick brown fox jumps over the lazy dog"

Should become:

"THE qck brwn FOX jmps vr THE lzy DOG"

For the purposes of this kata, mid-word punctuation counts towards the character limit of a word.

e.g: "it's / I'm" should become: "t's / I'M"

## My Solution

**JavaScript**

```js
const smallWordHelper = (sentence) =>
  sentence
    .split(' ')
    .map((el) => (el.length <= 3 ? el.toUpperCase() : el.replace(/[aeiou]/gi, '')))
    .join(' ');
```

### User Solution

**JavaScript**

```js
function smallWordHelper(s) {
  return s.replace(/[^\s]+/gi, (x) => (x.length > 3 ? x.replace(/[aeiou]/gi, '') : x.toUpperCase()));
}
```
