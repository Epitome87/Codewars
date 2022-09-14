/*
Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/

// My solution:
const odds = (values) => values.filter((n) => n % 2);

// Good user solution:
function odds(values) {
  return values.filter((x) => x & 1);
}

/* Takeaways:
1) Learn bitwise operators!
*/
