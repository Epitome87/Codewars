# [Playing with Sets: Complement](https://www.codewars.com/kata/5884e9ccf72916207900010f)

## Description

Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

**Complement**

Two sets can be "subtracted". The relative complement of B in A, denoted by A \ B (or A − B), is the set of all elements that are members of A but not members of B. Note that it is valid to "subtract" members of a set that are not in the set, such as removing the element green from the set {1, 2, 3}; doing so has no effect.

Examples:

```
  {1, 2} \ {1, 2} = ∅.
  {1, 2, 3, 4} \ {1, 3} = {2, 4}.
```

**Task**

Create function diff getting 2 sets as arguments and returning a new Set as result of relative complement of second set in first.

Examples:

```js
A = new Set([1, 2]);
B = new Set([2, 3]);

diff(A, B); // -> {1}
diff(B, A); // -> {3}
```

## My Solution

**JavaScript**

```js
const diff = (s1, s2) => [...s1].reduce((acc, cur) => (!s2.has(cur) && acc.add(cur), acc), new Set());
```

```js
const diff = (s1, s2) =>
  [...s1].reduce((acc, cur) => {
    if (!s2.has(cur)) acc.add(cur);
    return acc;
  }, new Set());
```

```js
const diff = (s1, s2) => {
  const complement = new Set();

  for (let el of s1) {
    if (!s2.has(el)) complement.add(el);
  }

  return complement;
};
```

### User Solution

**JavaScript**

```js
function diff(s1, s2) {
  return new Set([...s1].filter((e) => !s2.has(e)));
}
```
