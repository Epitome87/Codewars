/*
You have to define a function to calculate the division of two factorial numbers. This can be useful for large numbers.

In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120.

Some hints: We can see that (n + 1)! = (n + 1) * n!. So (n + 1)! / n! = (n + 1)

We know that 0! = 1 (because n! = (n + 1)! / (n + 1) therefore 0! = 1! / 1 = 1)

And your solution should be able to calculate n! / d!.

*** Please, don't worry about the parameters. You will only receive positive integers, and the first one will be greater than the second one
*/

// My solution:
const factorialDivision = (n, d) => {
  let res = 1n;

  for (let i = n; i > d; i--) {
    res *= i;
  }

  return res;
};

// Top user solution:
function factorialDivision(n, d) {
  let result = 1n;
  for (let i = d + 1n; i <= n; i++) {
    result *= i;
  }
  return result;
}

/* Takeaways:
1) I honestly don't understand why "1n" is valid JavaScript here.
*/
