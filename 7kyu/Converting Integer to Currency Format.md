# [Converting Integer to Currency Format](https://www.codewars.com/kata/54e9554c92ad5650fe00022b)

## Description

Write a function that takes an integer in input and outputs a string with currency format.

Integer in currency format is expressed by a string of number where every three characters are separated by comma.

For example:

```
123456 --> "123,456"
```

Input will always be an positive integer, so don't worry about type checking or negative/float values.

## My Solution

**JavaScript**

```js
const toCurrency = (price) => new Intl.NumberFormat().format(price);
```

### User Solution

**JavaScript**

```js
function toCurrency(price) {
  return price.toLocaleString();
}
```

```js
function toCurrency(price) {
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}
```

```js
const toCurrency = (price) =>
  price
    .toString()
    .split('')
    .reverse()
    .reduce((acc, number, index) => (index % 3 === 0 ? number + ',' + acc : number + acc));
```
