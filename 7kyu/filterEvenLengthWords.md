# [filterEvenLengthWords](https://www.codewars.com/kata/59564f3bcc15b5591a00004a)

## Description

Write a function called `filterEvenLengthWords`.

Given an array of strings, `filterEvenLengthWords` returns an array containing only the elements of the given array whose length is an even number.

```js
var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

console.log(output); // --> ['word', 'word']
```

## My Solution

**JavaScript**

```js
const filterEvenLengthWords = (words) => words.filter((word) => word.length % 2 === 0);
```

**Python**

```py
def filter_even_length_words(words):
    return [word for word in words if not len(word) % 2]
```
