# [Quine](https://www.codewars.com/kata/582949352c5d0a3dee000092)

## Description

Just write quine function.

https://en.wikipedia.org/wiki/Quine_(computing)

## My Solution

**JavaScript**

```js
const quine = () => quine.toString();
```

### User Solution

**JavaScript**

```js
function quine() {
  return `${quine}`;
}
```
