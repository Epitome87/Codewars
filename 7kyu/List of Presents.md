# [List of Presents](https://www.codewars.com/kata/5a84d485742ba347b90006b7)

## Description

Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:

Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

NOTE: All numbers will be integers >= 0, and the array will never be empty.

## My Solution

**JavaScript**

```js
const howManyGifts = (maxBudget, gifts) =>
  [...gifts].sort((a, b) => a - b).reduce((acc, cur) => ((maxBudget -= cur) >= 0 ? ++acc : acc), 0);
```

```js
const howManyGifts = (maxBudget, gifts) => {
  const sortedGifts = [...gifts].sort((a, b) => a - b);
  let giftCount = 0;

  for (let gift of sortedGifts) {
    if (maxBudget - gift < 0) return giftCount;
    giftCount++;
    maxBudget -= gift;
  }

  return giftCount;
};
```

## User Solution

**JavaScript**

```js
const howManyGifts = (b, g) => g.sort((a, b) => a - b).filter((x) => (b -= x) >= 0).length;
```
