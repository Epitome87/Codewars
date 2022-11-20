/*
This question is a variation on the Arithmetic Progression kata

The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
*/

// My eh solution:
const missingNo = (nums) => {
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 1; i <= nums.length; i++) {
    if (i !== sorted[i - 1] + 1) return i - 1;
  }
};

// Very clever user solution:
function missingNo(nums) {
  return 5050 - nums.reduce((a, b) => a + b, 0);
}

// Better user version of my solution:
function missingNo(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= 100; i++) {
    if (nums[i] !== i) return i;
  }
}

/* Takeaways:
1) When you have so many constants and restrictions (i.e always only one number missing, size is always 100, always contains all but one number from 0 to 100), think of more efficient ways to solve the solution! In this case, we know the sum of 0-100 is 5050, so we can use this fact to our advantage.
*/
