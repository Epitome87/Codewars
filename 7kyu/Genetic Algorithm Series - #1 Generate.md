# [Genetic Algorithm Series - #1 Generate](https://www.codewars.com/kata/567d609f1c16d7369c000008)

## Description

A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we need to generate random binary strings with a specified length.

In this kata you have to implement a function generate that receives a length and has to return a random binary string with length characters.

(See link for useful illustration here)

Example:

Generate a chromosome with length of 4 generate(4) could return the chromosome 0010, 1110, 1111... or any of 2^4 possibilities.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.

## My Solution

**JavaScript**

```js
const generate = (length) => Array.from({ length }, (v, i) => (Math.random() < 0.5 ? '0' : '1')).join('');
```

### User Solution

**JavaScript**

```js
const generate = (length) => [...Array(length)].map((val) => (Math.random() * 2) ^ 0).join(``);
```
