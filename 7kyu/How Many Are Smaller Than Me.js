/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
*/

// My refactored solution:
const smaller = (nums) =>
  nums.map((num, idx, arr) => arr.slice(idx + 1).reduce((acc, curr) => (curr < num ? acc + 1 : acc), 0));

// My eh solution:
const smaller = (nums) => {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) count++;
    }
    res.push(count);
  }

  return res;
};

// Top user solution:
const smaller = (nums) => nums.map((x, i) => nums.slice(i).filter((y) => x > y).length);

/* Takeaways:
1) Remember, rather than using .reduce() to count the number of elements that meet a criteria, just take the length of the result of .filter()!
*/
