# [Wealth Equality, Finally!](https://www.codewars.com/kata/5815f7e789063238b30001aa)

## Description

The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

Their first act in power is absolute wealth equality through coercive redistribution.

Create a function that redistributes all wealth equally among all citizens.

Wealth is represented as an array/list where every index is the wealth of a single citizen.  
The function should mutate the input such that every index has the same amount of wealth.

See example:

- Input:

      [5, 10, 6]  >>> This represents:
                 # citizen 1 has wealth 5
                 # citizen 2 has wealth 10
                 # citizen 3 has wealth 6

- Should be after the test:

       [7, 7, 7] >>> wealth has now been equally redistributed

Info:

- **MUTATE the input array/list, don't return anything**
- Input is guaranteed to hold at least 1 citizen
- Wealth of a citizen will be an integer with minimum equal to 0 (negative wealth is not possible)
- Handling of floating point error will not be tested

## My Solution

**JavaScript**

```js
const redistributeWealth = (wealth) => {
  const averageWealth = wealth.reduce((sum, curr) => sum + curr, 0) / wealth.length;
  for (let i = 0; i < wealth.length; i++) {
    wealth[i] = averageWealth;
  }
};
```

**Python**

```py
def redistribute_wealth(wealth):
    average = sum(wealth) / len(wealth)
    for i in range(len(wealth)):
        wealth[i] = average
```

### User Solution

**JavaScript**

```js
function redistributeWealth(wealth) {
  wealth = wealth.fill(
    wealth.reduce(function (a, b) {
      return a + b;
    }) / wealth.length
  );
}
```

**Python**

```py
def redistribute_wealth(wealth):
    wealth[:] = [sum(wealth) / len(wealth)] * len(wealth)
```
