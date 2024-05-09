# [T.T.T #7: Profit or Loss](https://www.codewars.com/kata/5768b775b8ed4a360f000b20)

## Description

**Story**

John runs a shop, bought some goods, and then sells them. He used a special accounting method, like this:

```
[[60,20],[60,-20]]
```

Each sub array records the commodity price and profit/loss to sell (percentage). Positive mean profit and negative means loss.

In the example above, John's first commodity sold at a price of $60, he made a profit of 20%; Second commodities are sold at a price of $60 too, but he lost 20%.

Please calculate, whether his account is profit or loss in the end?

**Rules**

Write a function `profitLoss`, argument `records` is the list of sales.

return a number(positive or negative), round to two decimal places.

**Examples**

```
In the example above:
profitLoss([[60,20],[60,-20]]) should return -5

Because the cost of the first commodity is 50,
        the cost of the second commodity is 75,
        the total cost is: 50+75=125
        Selling price is:  60+60=120
So the end result is 120-125=-5. He made a loss of $5.

profitLoss([[100,20],[80,-20]]) should return -3.33
profitLoss([[60,100],[60,-50]]) should return -30
profitLoss([[60,0],[60,0]]) should return 0
```

## My Solution

**JavaScript**

```js
const profitLoss = (records) => +records.reduce((acc, cur) => acc + cur[0] - cur[0] / (1 + cur[1] / 100), 0).toFixed(2);
```

```js
const profitLoss = (records) => {
  const sellingPrice = records.reduce((acc, cur) => acc + cur[0], 0);
  const totalCost = records.reduce((acc, cur) => acc + cur[0] / (1 + cur[1] / 100), 0);
  return +(sellingPrice - totalCost).toFixed(2);
};
```

**Python**

```py
def profit_loss(records):
    total_cost = sum(record[0] / (1 + record[1] / 100) for record in records)
    selling_price = sum(record[0] for record in records)
    return round(selling_price - total_cost, 2)
```

### User Solution

**Python**

```py
def profitLoss(records):
    return round(sum(price - price / (1 + profit / 100) for (price, profit) in records), 2)
```
