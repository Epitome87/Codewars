# [Genetic Algorithm Series #4 - Get Population and Fitnesses](https://www.codewars.com/kata/567b468357ed7411be00004a)

## Description

In a genetic algorithm, a population is a collection of candidates that may evolve toward a better solution.

We determine how close a chromosome is to a ideal solution by calculating its fitness. You are given two parameters, the population containing all individuals and a function fitness that determines how close to the solution a chromosome is.

Your task is to return a collection containing an object with the chromosome and the calculated fitness.

```js
[
  { chromosome: c, fitness: f },
  { chromosome: c, fitness: f },
  ...
]
```

## My Solution

**JavaScript**

```js
const mapPopulationFit = (population, fitness) => population.map((v) => ({ chromosome: v, fitness: fitness(v) }));
```
