# [Sentence to Words](https://www.codewars.com/kata/57a05e0172292dd8510001f7)

## Description

Write function splitSentence which will create a list of strings from a string.

Example:

```
"hello world" -> ["hello", "world"]
```

## My Solution

**JavaScript**

```js
const splitSentence = (s) => s.split(' ');
```

### User Solution

**JavaScript**

```js
const splitSentence = (s) => s.match(/\w+/g);
```
