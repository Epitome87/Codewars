# [I Guess This Is a 7kyu Kata #6: Fruit Ninja I](https://www.codewars.com/kata/57d60363a65454701d000e11)

## Description

You are a Fruit Ninja, your skill is cutting fruit. All the fruit will be cut in half by your knife. For example:

```
[  "apple",     "pear",     "banana"  ]  --> ["app", "le", "pe", "ar", "ban", "ana"]
```

As you see, all fruits are cut in half. You should pay attention to `"apple":` if you cannot cut a fruit into equal parts, then the first part will has a extra character.

You should only cut the fruit, other things should not be cut, such as the `"bomb"`:

```
[  "apple",     "pear",     "banana",   "bomb"]  -->
["app", "le", "pe", "ar", "ban", "ana", "bomb"]
```

The valid fruit names are preloded for you as:

```
fruitsName
```

**Task**

Complete function `cutFruits` that accepts argument `fruits`. Returns the result in accordance with the rules above.

## My Solution

**JavaScript**

```js
const cutFruits = (fruits) =>
  fruits.reduce(
    (acc, cur, i, arr) =>
      fruitsName.includes(cur)
        ? [...acc, cur.slice(0, Math.ceil(cur.length / 2)), cur.slice(Math.ceil(cur.length / 2))]
        : [...acc, cur],
    []
  );
```

```js
const cutFruits = (fruits) => {
  const result = [];

  for (let i = 0; i < fruits.length; i++) {
    if (fruitsName.includes(fruits[i])) {
      result.push(
        fruits[i].slice(0, Math.ceil(fruits[i].length / 2)),
        fruits[i].slice(Math.ceil(fruits[i].length / 2))
      );
    } else result.push(fruits[i]);
  }

  return result;
};
```
