/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

// My (slow) straightforward solution:
const mygcd = (x, y) => {
  const max = Math.max(x, y);

  for (let i = max; i >= 1; i--) {
    if (x % i === 0 && y % i === 0) return i;
  }

  return 1;
};

// My solution (after Googling Euclidean Algorithm):
const mygcd = (x, y) => {
  let r;

  while (x % y > 0) {
    r = x % y;
    x = y;
    y = r;
  }

  return y;
};

// Top recursive user solution:
function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

/* Takeaways:
1) Learn and understand why the Euclidean Algorithm works for this!
*/
