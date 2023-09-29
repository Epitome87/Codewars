# [Genetic Algorithm Series - #2 Mutation](https://www.codewars.com/kata/567b39b27d0a4606a5000057)

## Description

Mutation is a genetic operator used to maintain genetic diversity from one generation of a population of genetic algorithm chromosomes to the next.

(See link for important illustrations)

A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and by a given probability it will decide if a mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.

## My Solution

**JavaScript**

```js
const mutate = (chromosome, p) => chromosome.replace(/[01]/g, ($1) => (Math.random() < p ? (+$1 ? 0 : 1) : $1));
```

```js
const mutate = (chromosome, p) => [...chromosome].map((c) => (Math.random() < p ? (c === '0' ? 1 : 0) : c)).join('');
```

### User Solution

**JavaScript**

```js
const mutate = (chromosome, p) => chromosome.replace(/\d/g, (val) => val ^ (Math.random() < p));
```
