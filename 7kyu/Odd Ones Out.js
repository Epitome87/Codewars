/*
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:

the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]

Here are more examples:

oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []
Are you up to the challenge?
*/

// My solution:
const oddOnesOut = (nums) => nums.filter((num, _, arr) => arr.filter((n) => n === num).length % 2 === 0);

// Top user solution:
function oddOnesOut(nums) {
  const results = {};
  nums.forEach((num) => {
    if (results[num]) {
      results[num]++;
    } else {
      results[num] = 1;
    }
  });
  return nums.filter((el) => results[el] % 2 === 0);
}

// Clever user solution:
function oddOnesOut(a) {
  let d = a.reduce((x, y) => ((x[y] = (x[y] || 0) + 1), x), {});
  return a.filter((x) => d[x] % 2 === 0);
}
