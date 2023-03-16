/*
Write

function consecutiveOnes(nums) {}
that takes in array nums and returns the maximum consecutive 1's

For example

consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0
PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT
*/

// My solution:
const consecutiveOnes = (nums) => {
  let max = 0;
  let cur = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) cur++;
    else {
      max = Math.max(max, cur);
      cur = 0;
    }
  }
  return Math.max(max, cur);
};

// My one-liner (note: too slow to pass tests!):
/* function consecutiveOnes(a) {
  return Math.max(...a.join("").split("0").map(s => s.length));
} */

// Clever one-line user solution:
const consecutiveOnes = (nums, n = 0) =>
  nums.reduce((acc, i) => (acc < (n = (n + 1) * i) ? n : acc), (n = 0));
