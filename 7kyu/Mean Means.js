/*
Take a list of n numbers a1, a2, a3, ..., aN to start with.

Arithmetic mean (or average) is the sum of these numbers divided by n.

Geometric mean (or average) is the product of these numbers taken to the nth root.

Example
List of numbers: 1, 3, 9, 27, 81

n = 5
Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9
Task
You will be given a list of numbers and their arithmetic mean. However, the list is missing one number. Using this information, you must figure out and return the geometric mean of the FULL LIST, including the number that's missing.
*/

// My solution:
const geo_mean = (nums, arith_mean) => {
  const length = nums.length + 1;
  const missingNum =
    arith_mean * length - nums.reduce((acc, curr) => acc + curr, 0);
  return (
    (nums.reduce((acc, curr) => acc * curr, 1) * missingNum) ** (1 / length)
  );
};

// Good user solution:
function geo_mean(nums, arith_mean) {
  return (
    [
      ...nums,
      nums.reduce((num, el) => num - el, arith_mean * (nums.length + 1)),
    ].reduce((prod, el) => prod * el, 1) **
    (1 / (nums.length + 1))
  );
}

// Another good user solution:
function geoMean(nums, arithMean) {
  let fullCount = nums.length + 1;
  let fullSum = arithMean * fullCount;
  let partialSum = nums.reduce((total, number) => total + number, 0);
  let missing = fullSum - partialSum;
  let multiplied = nums.reduce((product, number) => product * number, missing);
  let geoMean = multiplied ** (1 / fullCount);
  return geoMean;
}

const geo_mean = geoMean;
