/*
Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false
*/

// My solution:
const circleArea = (radius) =>
  radius <= 0 || typeof radius !== 'number' ? false : +(Math.PI * radius ** 2).toFixed(2);

// Top user solution:
var circleArea = function (radius) {
  return radius > 0 ? +(radius * radius * Math.PI).toFixed(2) : false;
};

/* Takeaways:
  1) Remember: Number.prototype.toFixed(numDecimal) for trimming down on decimal places.
  2) Also remember: Doing the above method results in a string! We typically want to convert to number.
  3) When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false. Basically, NaN is ALWAYS false, even when comparing it to itself!
  4) The reason the user's solution gets around having to check isNaN(radius) or typeof radius === 'number' is by switching the conditional to run the area calculation if the condition is true, rather than false. This ensures a result of NaN (always false) runs the return false logic!
*/
