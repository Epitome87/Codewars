# [Max Headroom and JavaScript Style](https://www.codewars.com/kata/52a47dd7e950edabfa000391)

## Description

Shouldn't the two functions `getMax1` and `getMax2` be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

Original (bugged) code:

```js
function getMax1() {
  var max = {
    name: 'Max Headroom',
  };
  return max;
}

function getMax2() {
  return;
  {
    name: 'Max Headroom';
  }
}
```

## My Solution

```js
const getMax1 = () => ({ name: 'Max Headroom' });
const getMax2 = () => ({ name: 'Max Headroom' });
```

```js
function getMax1() {
  var max = {
    name: 'Max Headroom',
  };
  return max;
}

function getMax2() {
  return {
    name: 'Max Headroom',
  };
}
```
