# [Training JS #42: Regular Expression--( ?: ), ( ?= ) and ( ?! )](https://www.codewars.com/kata/573fb9223f9793e485000453)

## Description

**Task**

Your task is coding in function addCommas. Function accepts 2 parameters: money and reg. money is a string, it only contains "$" and numbers. To avoid someone being lazy, so you should defined a regular expression outside function, its name should be regex. It will passed to the function as parameter reg. You can write code that uses this regular expression in the function, such as using replace() or other methods.

**Examples**

addCommas("$123",regex) should return "$123"
addCommas("$1234",regex) should return "$1,234"
addCommas("$12345",regex) should return "$12,345"
addCommas("$1234567",regex) should return "$1,234,567"
addCommas("$123456789",regex) should return "$123,456,789"

## My Solution

**JavaScript**

```js
const regex = /\d(?=(\d{3})+$)/g;
const addCommas = (money, reg) => money.replace(reg, (x) => x + ',');
```

### User Solution

**JavaScript**

```js
const regex = /(?<=\d+)(?=(\d{3})+$)/g;
const addCommas = (money, reg) => money.replace(reg, `,`);
```
