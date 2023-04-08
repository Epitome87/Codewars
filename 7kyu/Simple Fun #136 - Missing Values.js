/*
Task
You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

Your task is to find x * x * y.

Example
For arr=[1, 1, 1, 2, 2, 3], the result should be 18

3 x 3 x 2 = 18

For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000

200 x 200 x 100 = 4000000

Input/Output
[input] integer array arr
an array contains positive integers.

[output] an integer
The value of x * x * y
*/

// My solution:
const missingValues = (arr) => {
  const frequency = {};

  for (let el of arr) {
    frequency[el] = frequency[el] + 1 || 1;
  }

  const x = Object.keys(frequency).find((val) => frequency[val] === 1);
  const y = Object.keys(frequency).find((val) => frequency[val] === 2);

  return x * x * y;
};

// Top user solution:
function missingValues(a) {
  const x = a.find((v) => a.filter((w) => v === w).length === 1);
  const y = a.find((v) => a.filter((w) => v === w).length === 2);
  return x * x * y;
}

/* Takeaways:
1) Note the various ways we can shorten the logic of setting the key-values for frequency object. 
Method 1:
    if (frequency[el]) frequency[el] += 1;
        else frequency[el] = 1;
Method 2:
    frequency[el] = frequency[el] ? frequency[el] + 1 : 1;
Method 3:
    frequency[el] = 1 + (frequency[el] || 0);
Method 4:
    frequency[el] = frequency[el] + 1 || 1;
This works because if the value is not defined, we get NaN. NaN + 1 is NaN (falsy), so we return the || 1.
Method 5 (using nullish coalescing):
    frequency[el] = frequency[el] + 1 ?? 1;
Similar to the above method, but this will correctly handle cases where the value isn't undefined or null, but rather just 0.
*/
