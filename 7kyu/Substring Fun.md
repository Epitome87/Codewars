# [Substring Fun](https://www.codewars.com/kata/565b112d09c1adfdd500019c)

## Description

Complete the function that takes an array of words.

You must concatenate the `n`th letter from each word to construct a new word which should be returned as a string, where `n` is the position of the word in the list.

For example:

    ["yoda", "best", "has"]  -->  "yes"
      ^        ^        ^
      n=0     n=1     n=2

**Note:** Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

## My Solution

**JavaScript**

```js
const nthChar = (words) => words.reduce((a, b, idx) => a + b[idx], '');
```

```js
const nthChar = (words) => Array.from({ length: words.length }, (_, i) => words[i][i]).join('');
```

**Python**

```py
def nth_char(words):
	return ''.join([word[i] for i, word in enumerate(words)])
```
