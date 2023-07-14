# [Calculate Meal Total](https://www.codewars.com/kata/58545549b45c01ccab00058c)

## Description

Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.

## My Solution

**JavaScript**

```js
const calculate_total = (subtotal, tax, tip) => +((subtotal * (100 + tax + tip)) / 100).toFixed(2);
```

```js
const calculate_total = (subtotal, tax, tip) => +(subtotal * (1 + tax / 100) + (tip / 100) * subtotal).toFixed(2);
```
