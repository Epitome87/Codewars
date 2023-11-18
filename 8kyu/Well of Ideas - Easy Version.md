# [Well of Ideas - Easy Version](https://www.codewars.com/kata/57f222ce69e09c3630000212)

## Description

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

## My Solution

**JavaScript**

```js
const well = (x) => (
  (numGood = x.filter((v) => v === 'good').length),
  numGood > 2 ? 'I smell a series!' : numGood > 0 ? 'Publish!' : 'Fail!'
);
```

```js
const well = (x) => {
  const numGoodIdeas = x.filter((idea) => idea === 'good').length;

  return numGoodIdeas > 2 ? 'I smell a series!' : numGoodIdeas >= 1 ? 'Publish!' : 'Fail!';
};
```

### User Solution

**JavaScript**

```js
const well = (x) =>
  x.includes('good') ? (x.filter((s) => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!') : 'Fail!';
```
