/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

// My solution:
const solve = (s) => {
  const up = s.match(/[A-Z]/g);
  const low = s.match(/[a-z]/g);
  const num = s.match(/[0-9]/g);
  const spec = s.match(/[^0-9a-zA-Z]/g);

  return [up && up.length, low && low.length, num && num.length, spec && spec.length];
};

// Clever user solution:
const solve = (str) => [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map((rgx) => str.split(rgx).length - 1);

// Another good user solution:
const solve = (x) => {
  let u = x.match(/[A-Z]/g) || [];
  let d = x.match(/[a-z]/g) || [];
  let n = x.match(/[0-9]/g) || [];
  let s = x.match(/[^A-Z0-9]/gi) || [];
  return [u.length, d.length, n.length, s.length];
};

/* Takeaways:
1) User solution not only makes use of putting Regex into an array and mapping over it, but also splitting a string based on that Regex and counting its length (- 1) rather than making use of String.match(regex).
2) The second user solution is a nice refactor of mine, setting each counter to an empty array if no matches are found.
*/
