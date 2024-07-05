# [Personalized Brand List](https://www.codewars.com/kata/57cb12aa40e3020bb4001d2e)

## Description

Assume you are creating a webshop and you would like to help the user in the search. You have products with brands, prices and name. You have the history of opened products (the most recently opened being the first item).

Your task is to create a list of brands ordered by popularity, if two brands have the same popularity level then choose the one which was opened last from the two and second the other one.

Product popularity is calculated from the history. If a product is more times in the history than it is more popular.

Your function will have one parameter which will be always an array/list of object.

example product: `{ name: "Phone", price: 25, brand: "Fake brand" }`

## My Solution

**JavaScript**

```js
const sortedBrands = (history) => {
  const map = history.reduce((acc, { brand }, i) => {
    if (acc[brand]) acc[brand] = [acc[brand][0] + 1, acc[brand][1]];
    else acc[brand] = [1, i];
    return acc;
  }, {});

  return Object.keys(map).sort((a, b) => (map[b][0] === map[a][0] ? map[a][1] - map[b][1] : map[b][0] - map[a][0]));
};
```

```js
const sortedBrands = (history) => {
  const map = {};

  for (let i = 0; i < history.length; i++) {
    const { brand } = history[i];
    if (map[brand]) map[brand] = [map[brand][0] + 1, map[brand][1]];
    else map[brand] = [1, i];
  }

  return Object.keys(map).sort((a, b) => (map[b][0] === map[a][0] ? map[a][1] - map[b][1] : map[b][0] - map[a][0]));
};
```
