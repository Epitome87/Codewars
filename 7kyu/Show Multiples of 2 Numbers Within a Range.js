/*
Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation
*/

// My solution:
const multiples = (s1, s2, s3) => {
  const res = [];
  for (let i = s1; i < s3; i += s1) {
    if (i % s2 === 0) res.push(i);
  }
  return res;
};

// Clever one-line user solution:
const multiples = (s1, s2, s3) =>
  [...Array(s3 - s1)]
    .map((_, idx) => idx + s1)
    .filter((val) => !(val % s1 || val % s2));

/* Takeaways:
1) Rather than i % s1 === 0 && i % s2 === 0 as a condition, we can do:
!(i % s1 || i % s2)
*/
