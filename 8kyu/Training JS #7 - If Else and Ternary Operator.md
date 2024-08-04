# [Training JS #7: If Else and Ternary Operator](https://www.codewars.com/kata/57202aefe8d6c514300001fd)

## Description

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

| number  | price      | (cents) |
| ------- | ---------- | ------- |
| n < 5   | 100        |
| n >= 5  | and n < 10 | 95      |
| n >= 10 | 90         |

You can use if..else or ternary operator to complete it.

```js
const saleHotdogs = (n) => n * (n < 5 ? 100 : n < 10 ? 95 : 90);
```

```js
const saleHotdogs = (n) => (n < 5 ? n * 100 : n >= 10 ? n * 90 : n * 95);
```
