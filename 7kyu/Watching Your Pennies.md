# [Watching Your Pennies](https://www.codewars.com/kata/5963cb8dbf0604be69000072)

## Description

Congrats! You are now living on your own as a student for the first time. Mom & Dad set you up with a savings account and gave you a lump sum of cash to get you through the next year. Will you make it?

The function has three inputs: cash (the lump sum from your parents), monthly expenses, and the monthly interest rate on your bank account.

The output should be the amount of money leftover after 12 months or the number of months before you ran out of money. Formatting should be as in these examples:

manageMoney(10000,800,0.2) returns "You still have $536.35"

manageMoney(10000,1000,0.2) returns "You ran out of money after 10 months"

Some notes:

- All of the cash starts out in the savings account.
- Interest is paid at the end of the month.
- The expenses are paid at the end of the month in one lump sum after receiving the monthly interest.
- Round your final answer to the nearest two decimal places for cash, to integers for months.
- An interest rate of 0.2 means 0.2%, not 20%.
- Despite usual grammar rules "...after 1 months" is the expected result in such a case

## My Solution

**JavaScript**

```js
const manageMoney = (cash, expenses, rate) => {
  for (let i = 0; i < 12; i++) {
    cash += (cash * rate) / 100;
    cash -= expenses;
    if (cash <= 0) return `You ran out of money after ${i} months`;
  }

  return `You still have $${cash.toFixed(2)}`;
};
```

### User Solution

**JavaScript**

```js
function manageMoney(cash, expenses, rate) {
  rate = 1 + rate * 1e-2;
  let mFinal = Math.log(expenses / (expenses + (1 - rate) * cash)) / Math.log(rate);
  if (mFinal <= 12) return `You ran out of money after ${Math.floor(mFinal)} months`;
  else
    return `You still have $${(cash * Math.pow(rate, 12) - expenses * ((Math.pow(rate, 12) - 1) / (rate - 1))).toFixed(
      2
    )}`;
}
```
