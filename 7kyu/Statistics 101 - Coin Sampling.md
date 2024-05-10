# [Statistics 101: Coin Sampling](https://www.codewars.com/kata/58d8f800a1111a80f400021a)

## Description

You're given a loaded coin with unknown probability `p` of turning up a head when flipping, and you want to know this probability!

You need to write a function `sample` which, given a function `coin`, estimates its probability of turning up head, up to an absolute error of 1% (1/100). To flip a coin, simply call the function: `coin()`.

For simplicity, a head is represented as `true` while a tail is represented as `false`.

## My Solution

**JavaScript**

```js
const sample = (coin) => [...Array(10000)].reduce((acc, cur) => acc + coin(), 0) / 10000;
```

```js
const sample = (coin) => {
  const NUM_FLIPS = 10_000;
  let headCount = 0;

  for (let i = 0; i < NUM_FLIPS; i++) {
    headCount += coin();
  }

  return headCount / NUM_FLIPS;
};
```

### User Solution

**JavaScript**

```js
sample = (C) => [...Array(1e5)].filter(C).length / 1e5;
```
