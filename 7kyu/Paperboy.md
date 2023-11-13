# [Paperboy](https://www.codewars.com/kata/https://www.codewars.com/kata/56ed5f13c4e5d6c5b3000745)

## Description

You and your best friend Stripes have just landed your first high school jobs! You'll be delivering newspapers to your neighbourhood on weekends. For your services you'll be charging a set price depending on the quantity of the newspaper bundles.

The cost of deliveries is:

- $3.85 for 40 newspapers
- $1.93 for 20
- $0.97 for 10
- $0.49 for 5
- $0.10 for 1

Stripes is taking care of the footwork doing door-to-door drops and your job is to take care of the finances. What you'll be doing is providing the cheapest possible quotes for your services.

Write a function that's passed an integer representing the amount of newspapers and returns the cheapest price. The returned number must be rounded to two decimal places.

## My Solution

**JavaScript**

```js
const cheapestQuote = (p) =>
  +[40, 20, 10, 5, 1]
    .reduce(
      (acc, cur) => (
        (n = (p / cur) ^ 0), (p -= n * cur), acc + n * { 40: 3.85, 20: 1.93, 10: 0.97, 5: 0.49, 1: 0.1 }[cur]
      ),
      0
    )
    .toFixed(2);
```

```js
const cheapestQuote = (newspapers) => {
  const papers = { 40: 3.85, 20: 1.93, 10: 0.97, 5: 0.49, 1: 0.1 };
  let cost = 0;

  for (let p of [40, 20, 10, 5, 1]) {
    const x = (newspapers / p) ^ 0;
    cost += x * papers[p];
    newspapers -= x * papers[p];
  }

  return cost;
};
```

```js
const cheapestQuote = (newspapers) => {
  const num40 = (newspapers / 40) ^ 0;
  newspapers -= num40 * 40;

  const num20 = (newspapers / 20) ^ 0;
  newspapers -= num20 * 20;

  const num10 = (newspapers / 10) ^ 0;
  newspapers -= num10 * 10;

  const num5 = (newspapers / 5) ^ 0;
  newspapers -= num5 * 5;

  const num1 = (newspapers / 1) ^ 0;

  return +(num40 * 3.85 + num20 * 1.93 + num10 * 0.97 + num5 * 0.49 + num1 * 0.1).toFixed(2);
};
```

### User Solution

**JavaScript**

```js
const cheapestQuote = (newspapers) =>
  Math.round(
    [40, 20, 10, 5, 1].reduce(
      (pre, val, idx, arr) =>
        pre + (((idx ? newspapers % arr[idx - 1] : newspapers) / val) ^ 0) * [3.85, 1.93, 0.97, 0.49, 0.1][idx],
      0
    ) * 1e2
  ) / 1e2;
```

```js
const cheapestQuote = (newspapers) => {
  let total = 0;

  total += Math.floor(newspapers / 40) * 3.85;
  newspapers %= 40;

  total += Math.floor(newspapers / 20) * 1.93;
  newspapers %= 20;

  total += Math.floor(newspapers / 10) * 0.97;
  newspapers %= 10;

  total += Math.floor(newspapers / 5) * 0.49;
  newspapers %= 5;

  total += newspapers * 0.1;

  return Math.round(total * 100) / 100;
};
```
