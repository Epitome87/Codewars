/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// My meh solution (not efficient):
const findOutlier = (integers) => {
  const odds = integers.filter((n) => n % 2 != 0);
  const evens = integers.filter((n) => n % 2 === 0);

  return odds.length === 1 ? odds[0] : evens[0];
};

// My solution was actually the Best Practices and Clever one!

// A decent solution that short-circuits once the first unique parity is found:
function findOutlier(integers) {
  //your code here
  var len = integers.length;
  var first = Math.abs(integers[0]) % 2,
    second = Math.abs(integers[1]) % 2,
    third = Math.abs(integers[2]) % 2,
    base = first + second + third >= 2 ? 1 : 0;

  for (var i = 0; i < len; i++) {
    if (Math.abs(integers[i] % 2) != base) {
      return integers[i];
    }
  }
}
