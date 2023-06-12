# [Compress Sentences](https://www.codewars.com/kata/59de469cfc3c492da80000c5)

## Description

Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

**Example**

`"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"`

becomes

`"01234567802856734"`

**Another example**

`"the one bumble bee one bumble the bee"`

becomes

`"01231203"`

## My Solution

**JavaScript**

```js
const compress = (sentence) => {
  const positions = {};
  const words = sentence.toLowerCase().split(' ');
  let wordCount = 0;
  return words.reduce((acc, curr, idx, arr) => {
    if (curr in positions) return acc + positions[curr];
    positions[curr] = wordCount++;
    return acc + `${wordCount - 1}`;
  }, '');
};
```

## User Solution

```js
function compress(sentence) {
  const wordArr = sentence.toLowerCase().split(' ');
  const uniqueWords = [...new Set(wordArr)];
  return wordArr.map((e) => uniqueWords.indexOf(e)).join('');
}
```
