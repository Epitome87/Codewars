# [sPoNgEbOb MeMe](https://www.codewars.com/kata/5982619d2671576e90000017)

## Description

Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

    input:  "stop Making spongebob Memes!"
    output: "StOp mAkInG SpOnGeBoB MeMeS!"

## My Solution

**JavaScript**

```js
const spongeMeme = (sentence) =>
  [...sentence].reduce((acc, cur, idx) => acc + (idx % 2 ? cur.toLowerCase() : cur.toUpperCase()), '');
```

```js
const spongeMeme = (sentence) =>
  sentence
    .split('')
    .map((v, idx) => (idx % 2 !== 0 ? v.toLowerCase() : v.toUpperCase()))
    .join('');
```

**Python**

```py
def sponge_meme( s ):
    return ''.join([c.upper(), c.lower()][i % 2] for i, c in enumerate(s))
```
