/*
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

// My solution:
const getAges = (sum, difference) => {
  if (sum < 0 || difference < 0) return null;
  sum /= 2;
  difference /= 2;
  return sum + difference < 0 || sum - difference < 0 ? null : [sum + difference, sum - difference];
};

// Top user solution:
function getAges(sum, difference) {
  let average = 0;
  if (sum < 0 || difference < 0 || sum - difference < 0) return null;
  else average = (sum - difference) / 2;

  return [average + difference, average];
}

// Clever one-line user solution:
const getAges = (sum, difference) =>
  sum < 0 || difference < 0 || sum < difference ? null : [(sum + difference) / 2, (sum - difference) / 2];
