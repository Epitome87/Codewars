# [Playing with Sets: Symmetric Difference](https://www.codewars.com/kata/5884f4727987a2a561000147)

## Description

Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like `.add`, `.clear`, `.has` . . . BUT some "Set operations" are missing, like . . .

**Symmetric difference**

The symmetric difference is an extension of the complement. Denoted `A Δ B`, it's the set of all element of A which are not element of B and all element of B which are not element of A.

**Example:**

```
{7,8,9,10} Δ {9,10,11,12} = {7,8,11,12}.
```

**Task**

Create function `symDiff` getting 2 sets as arguments and returning a new Set as result of symmetric difference of these sets.

Examples:

```js
A = new Set([1, 2, 3]);
B = new Set([2, 3, 4]);
symDiff(A, B); // -> {1,4}
```

## My Solution

**JavaScript**

```js
const symDiff = (s1, s2) => {
  const result = new Set();

  for (let x of s1) if (!s2.has(x)) result.add(x);
  for (let x of s2) if (!s1.has(x)) result.add(x);

  return result;
};
```

### User Solution

**JavaScript**

```js
function symDiff(s1, s2) {
  return new Set([...s1, ...s2].filter((e) => s1.has(e) ^ s2.has(e)));
}
```
