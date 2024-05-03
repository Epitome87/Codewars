# [Vault Experience #1: Enough Water for How Many Days?](https://www.codewars.com/kata/576d209bed916d2ea30000f7)

## Description

Hello dweller,

I'm the overseer of our vault, in which we all live.

I make it short: We are out of water. The only question is when!
Here is a list of all dwellers with their respective age `int[] ageOfDwelle`r.
In our tank currently are `int water` liters of water.
I want to know from you: How long will rich our supplies.

Remember!
Each dweller has a different water consumption.
A dweller under 18 consumes 1 liter per day, everyone older than 50 needs 1.5 liters and the rest needs 2 liters per day.
Each dweller must get its prescribed ration of water, every day!
If not satisfied all dweller, then our days are numbered.

Good luck! I'll bet on you!

_Note from Vault Technicians:_
Your program returns a positive integer. The residual water is not calculated.
`return -1`; - If no dweller living inside of the Vault.

## My Solution

**JavaScript**

```js
const thirstyIn = (water, ages) =>
  ages.length ? (water / ages.reduce((acc, cur) => acc + (cur < 18 ? 1 : cur > 50 ? 1.5 : 2), 0)) ^ 0 : -1;
```

```js
const thirstyIn = (water, ageOfDwellers) => {
  const waterPerDay = ageOfDwellers.reduce((acc, cur) => acc + (cur < 18 ? 1 : cur > 50 ? 1.5 : 2), 0);
  return ageOfDwellers.length ? (water / waterPerDay) ^ 0 : -1;
};
```
