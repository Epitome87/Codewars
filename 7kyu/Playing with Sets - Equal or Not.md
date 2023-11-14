# [Playing with Sets: Equal or Not?](https://www.codewars.com/kata/588502f87987a27f690001f7)

## Description

Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

**Equality**

Two sets ( A, B ) are considered "equal" if all elements of A are elements of B and all elements of B are elements of A no matter "order" of elements.

**Examples:**

```
  {1, 2} == {2, 1}
  {1, 2} != {1, 2, 3}
```

**Task**

Create 2 functions, areEqual and notEqual, getting 2 sets as arguments and returning a true or false depending if these 2 sets are "equal" (respectively not equal) ie : if all elements of 1st set are elements of 2d and all elements of 2d set are elements of 1st.

**Examples:**

```js
A = new Set([1, 2]);
A2 = new Set([2, 1]);
B = new Set([2, 3]);

areEqual(A, B); // -> false
areEqual(A, A2); // -> true
notEqual(A, B); // -> true
```

## My Solution

**JavaScript**

```js
// Note: We should also check if s1.size === s2.size, but the Kata passes without it.
const areEqual = (s1, s2) => [...s1].every((n) => s2.has(n));
const notEqual = (s1, s2) => !areEqual(s1, s2);
```
