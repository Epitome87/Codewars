# [Pizza Payments](https://www.codewars.com/kata/5b043e3886d0752685000009)

## Description

Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

- If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
- Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.

How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

## My Solution

**JavaScript**

```js
const michaelPays = (costs) => (costs < 5 ? +costs.toFixed(2) : +(costs - Math.min((costs * 1) / 3, 10)).toFixed(2));
```

```js
const michaelPays = (costs) => {
  if (costs < 5) return +costs.toFixed(2);
  const kate = Math.min((costs * 1) / 3, 10);
  return +(costs - kate).toFixed(2);
};
```

### User Solution

**JavaScript**

```js
const michaelPays = (c) => +Math.max(c < 5 ? c : (2 / 3) * c, c - 10).toFixed(2);
```
