# [Row Weights](https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9)

## Description

**Scenario**

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

**Task**

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

**Notes**

- Array size is at least 1.
- All numbers will be positive.

**Input >> Output Examples**

rowWeights([13, 27, 49]) ==> return (62, 27)

Explanation:

The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

```
rowWeights([50, 60, 70, 80]) ==> return (120, 140)
```

Explanation:

The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

```
rowWeights([80]) ==> return (80, 0)
```

Explanation:

The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

## My Solution

**JavaScript**

```js
const rowWeights = (arr) => arr.reduce((acc, cur, i) => ((acc[i % 2] += cur), acc), [0, 0]);
```

```js
const rowWeights = (array) => {
  const teamOneWeights = array.filter((el, index) => (index + 1) % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
  const teamTwoWeights = array.filter((el, index) => (index + 1) % 2 === 0).reduce((acc, curr) => acc + curr, 0);

  return [teamOneWeights, teamTwoWeights];
};
```

**Python**

```py
def row_weights(array):
    teamOneWeight = sum(x for idx, x in enumerate(array) if not idx % 2)
    teamTwoWeight = sum(x for idx, x in enumerate(array) if idx % 2)
    return (teamOneWeight, teamTwoWeight)
```

### User Solution

**Python**

```py
def row_weights(array):
    return sum(array[::2]), sum(array[1::2])
```
