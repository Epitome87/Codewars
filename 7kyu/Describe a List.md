# [Describe a List](https://www.codewars.com/kata/57a4a3e653ba3346bc000810)

## Description

Write function describeList which returns "empty" if the list is empty or "singleton" if it contains only one element or "longer"" if more.

## My Solution

**JavaScript**

```js
const describeList = (x) => (!x.length ? 'empty' : x.length > 1 ? 'longer' : 'singleton');
```

### User Solution

**JavaScript**

```js
const describeList = (x) => ['empty', 'singleton'][x.length] || 'longer';
```

```js
const describeList = (x) => [`empty`, `singleton`, `longer`][Math.min(x.length, 2)];
```
