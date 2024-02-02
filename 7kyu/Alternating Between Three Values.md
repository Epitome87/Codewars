# [Alternating Between Three Values](https://www.codewars.com/kata/596776fbb4f24d0d82000141)

## Description

Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

```
  f(a) = b
  f(b) = c
  f(c) = a
```

**Example**

```
  f( 3, { a:3, b:4, c:5 } ) => 4
```

## My Solution

**JavaScript**

```js
function f(x, cc) {
  return cc.a === x ? cc.b : cc.b === x ? cc.c : cc.a;
}
```

```js
const f = (x, { a, b, c }) => ({ [a]: b, [b]: c, [c]: a }[x]);
```

```js
function f(x, cc) {
  switch (x) {
    case cc.a:
      return cc.b;
    case cc.b:
      return cc.c;
    case cc.c:
      return cc.a;
  }
}
```

**Python**

```py
def f(x, a, b, c):
  return { a: b, b: c, c: a}[x]
```

```py
def f(x, a, b, c):
    return b if x == a else c if x == b else a;
```
