/*
*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/

// My Regex solution:
const solve = (s) => {
  const lowers = s.match(/[a-z]/g);
  const numLowers = lowers ? lowers.length : 0;
  const numUppers = s.length - numLowers;

  return numUppers > numLowers ? s.toUpperCase() : s.toLowerCase();
};

// My straightforward solution:
const solve = (s) => {
  const uppercase = s.toUpperCase();

  // How many uppercase are there?
  const numUppercase = s
    .split('')
    .reduce(
      (acc, curr, index) => (curr === uppercase[index] ? (acc += 1) : acc),
      0
    );

  // How many lowercase are there?
  const numLowercase = s.length - numUppercase;

  return numUppercase > numLowercase ? uppercase : s.toLowerCase();
};

// Clever user solution:
const solve = (s) =>
  s.replace(/[A-Z]/g, '').length < s.length / 2
    ? s.toUpperCase()
    : s.toLowerCase();
