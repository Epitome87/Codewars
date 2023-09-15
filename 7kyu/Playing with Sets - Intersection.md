# [Playing with Sets : Intersection](https://www.codewars.com/kata/5884d46015a70f6cd7000035)

## Description

Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like `.add`, `.clear`, `.has` . . . BUT some "Set operations" are missing, like . . .

**Intersection**

A new set can be constructed by determining which members two sets have "in common". The intersection of A and B, denoted by A ∩ B, is the set of all things that are members of both A and B. If A ∩ B = ∅, then A and B are said to be disjoint.

Examples:

```
  {1, 2} ∩ {1, 2} = {1, 2}.
  {1, 2} ∩ {2, 3} = {2}.
```

**Task**

Create function inter getting 2 sets as arguments and returning a new Set as result of intersection of these 2 sets.

Examples:

```
A = new Set([1,2]);
B = new Set([2,3]);

C = inter(A,B) // -> {2}
```

## My Solution

**JavaScript**

```js
const inter = (s1, s2) =>
  [...s1].reduce((acc, cur) => {
    if (s2.has(cur)) acc.add(cur);
    return acc;
  }, new Set());
```

```js
const inter = (s1, s2) => {
  const result = new Set();

  for (let el of s1) {
    if (s2.has(el)) result.add(el);
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
const inter = (s1, s2) => new Set([...s1].filter((x) => s2.has(x)));
```
