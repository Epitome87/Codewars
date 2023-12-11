# [Pete, the Baker](https://www.codewars.com/kata/525c65e51bf619685c000059)

## Description

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

```js
// must return 2
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// must return 0
cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 });
```

## My Solution

**JavaScript**

```js
const cakes = (recipe, available) =>
  Object.keys(recipe).reduce((acc, cur) => Math.min((available[cur] / recipe[cur] || 0) ^ 0, acc), Infinity);
```

```js
const cakes = (recipe, available) => {
  let amounts = [];

  for (let ingredient in recipe) {
    if (!available[ingredient]) amounts.push(0);
    amounts.push(Math.floor(available[ingredient] / recipe[ingredient] || 0));
  }

  return Math.min(...amounts);
};
```

### User Solution

**JavaScript**

```js
const cakes = (needs, has) => Math.min(...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0)));
```

## Takeaways

1. I took a while to figure out my error was trying to floor `NaN`, hence the addition of the `|| 0 `piece of code.
