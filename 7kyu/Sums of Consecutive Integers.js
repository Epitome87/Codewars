/*
The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

position(4, 14, 3) == 5
Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.
*/

// My solution:
const position = (x, y, n) => Math.ceil(y / x - x / 2) + n;

// Top user solution (with his commentary):
// NOTE: For those who couldn't figure it out and are not the best at math (like me),
// this might be helpful.

// This answer does borrow from other solutions, but unlike them I've attempted to
// explain what I think each part of the formula is doing, in order to help myself and
// hopefully you out.

function position(x, y, n) {
  // TODO: return consecutive integer at requested position

  // find average of x, which is the upper boundary/range of the starting position(1)
  //    y/x

  // create lower boundary/range of starting position, whose difference from upper boundary is
  // the number of consecutive integers--x. (ex. y=36 x=8 avg=4.5, lower boundary=4.5-8=-3.5)
  //    -(x-1)/2
  // subtract the difference between the lower and upper boundary/range,
  // equaling/merging to the starting position('-' -> 1 <- '+')
  // find value of any # of x by adding n; this works bc x is an arith. sequence of +1
  return y / x - (x - 1) / 2 + n;
}

// alternatively

function position(x, y, n) {
  // TODO: return consecutive integer at requested position
  // create upper boundary using math.ceil and lower boundary using math.floor
  // this will create two different values compared to first solution, but the difference
  // between the two formulas is proportional(again, subtracting the difference here
  // will give you the starting position(1)).
  return Math.ceil(y / x) - Math.floor(x / 2) + n;
}

// Hope the explanations make the solution more tangible!
// And for those who think I'm wrong, please correct me!

/* Takeaways:
1) Mathematical explanation: y/x = average, (x-1)/2 = half-range, y/x - (x-1)/2 = first number, finally return first number + n.
*/
