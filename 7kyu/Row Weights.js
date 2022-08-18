/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
*/

// My straightforward solution:
const rowWeights = (array) => {
  const teamOneWeights = array.filter((el, index) => (index + 1) % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
  const teamTwoWeights = array.filter((el, index) => (index + 1) % 2 === 0).reduce((acc, curr) => acc + curr, 0);

  return [teamOneWeights, teamTwoWeights];
};

// Most clever user solution:
rowWeights = (arr) => arr.reduce((a, b, i) => ((a[i % 2] += b), a), [0, 0]);

/* Takeways:
1) Since the reduce method can also expose the index, perhaps consider making use of it in scenarios that would otherwise require a filter before-hand.
*/