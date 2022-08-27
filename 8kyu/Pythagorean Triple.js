/*
Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:

c2 = a2 + b2
where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

Return Values
1 if a, b and c form a pythagorean triple
0 if a, b and c do not form a pythagorean triple
For Python: return True or False
For JavaScript: return true or false
*/

// My solution:
const isPythagoreanTriple = (integers) => {
  const sortedInts = [...integers].sort((a, b) => a - b);
  return sortedInts[2] ** 2 === sortedInts[0] ** 2 + sortedInts[1] ** 2;
};

// Good user solution:
function isPythagoreanTriple(nums) {
  const [a, b, c] = nums.sort((a, b) => a - b);

  return a ** 2 + b ** 2 === c ** 2;
}

/* Takeaways:
1) Don't forget about destructuring, so we don't have to keep accessing an array index for each value we want!
*/
