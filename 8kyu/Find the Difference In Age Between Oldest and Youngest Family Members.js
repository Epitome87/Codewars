/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

// My solution:
const differenceInAges = (ages) => {
  const sortedAges = [...ages].sort((a, b) => a - b);
  const youngest = sortedAges[0];
  const oldest = sortedAges[sortedAges.length - 1];
  return [youngest, oldest, oldest - youngest];
};

// Good user solution:
function differenceInAges(ages) {
  const min = Math.min(...ages);
  const max = Math.max(...ages);

  return [min, max, max - min];
}
