# [Regex Failure - Bug Fixing #2](https://www.codewars.com/kata/55c423ecf847fbcba100002b)

## Description

Oh no, Timmy's received some hate mail recently but he knows better. Help Timmy fix his regex filter so he can be awesome again!

Original code:

```js
const filterWords = (phrase) => phrase.replace(/(bad|mean|ugly|horrible|hideous)/, 'awesome');
```

## My Solution

**JavaScript**

```js
const filterWords = (phrase) => phrase.replace(/bad|mean|ugly|horrible|hideous/gi, 'awesome');
```
