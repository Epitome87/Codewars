# [Tea for Two](https://www.codewars.com/kata/555a7dc335d4c407af00006e)

## Description

Tea for two!

Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' character or digit has been replaced with a t.

```js
tea42('coffee'); //should return 'coffee'
tea42('tea'); //should return 'tea'
tea42('2ea'); //should return 'tea'
tea42(9022); //should return '90tt'
tea42(5676765); //should return '5676765'
tea42('2u2u'); //should return 'tutu'
```

## My Solution

**JavaScript**

```js
const tea42 = (input) => `${input}`.replace(/2/g, 't');
```
