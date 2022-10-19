/*
You have to create a function namedone_two (oneTwo for Java or Preloaded.OneTwo for C#) that returns 1 or 2 with equal probabilities. one_two is already defined in a global scope and can be called everywhere.

Your goal is to create a function named one_two_three (oneTwoThree for Java or OneTwoThree for C#) that returns 1, 2 or 3 with equal probabilities using only the one_two function.

Do not try to cheat returning repeating non-random sequences. There is a randomness test especially for this case.
*/

// My (struggled) solution:
const one_two_three = () => {
  const a = one_two();
  const b = one_two();
  if (a === 1 && b === 1) return 1;
  if (a === 1 && b === 2) return 2;
  if (a === 2 && b === 1) return 3;
  return one_two_three();
};

// Good user solution:
function one_two_three() {
  switch (one_two() + one_two() * 2 - 3) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    default:
      return one_two_three();
  }
}
