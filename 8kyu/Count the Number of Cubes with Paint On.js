/*
Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

Examples:
countSquares(2) --> 26
countSquares(4) --> 98
*/

// My solution:
const countSquares = (cuts) => (cuts > 0 ? Math.pow(cuts + 1, 3) - Math.pow(cuts - 1, 3) : 1);

// Top user solution:
/**
 * Given a cube painted in red and sliced `N` times in the XYZ axis, this function (that should be named countCubes instead of countSquares) counts the number
 * of small cubes with at least one red face.
 *
 * This function avoids the use of `pow` on purpose. See references for more info.
 *
 * Special thanks to the people in math.exchange, they were kind and awesome.
 *
 * @param    {number}    cuts    The number of 3D cuts done to the painted cube.
 * @returns  {number}    The number of cubes with at least one red face.
 * @see      {@link http://math.stackexchange.com/questions/1874787/puzzle-find-number-of-cubes-with-1-red-face} for the mathematical algorithm behind the scenes.
 * @see      {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions} for information about Arrow functions in ECMA6
 * @see      {@link http://stackoverflow.com/questions/18382967/is-math-pow-more-expensive-than-multiplication-using-temporary-assignments} Comparison of multiply VS `pow`
 */
const countSquares = (cuts) => (cuts === 0 ? 1 : 6 * cuts * cuts + 2);

// Good user solution:
var countSquares = function (cuts) {
  if (!cuts) {
    return 1;
  }

  const totalCubes = Math.pow(cuts + 1, 3);
  const innerCubes = Math.pow(cuts - 1, 3);

  return totalCubes - innerCubes;
};

/* Takeaways:
1) Always pays off to be good at math!
2) Note that we can arrive at 6n^2 + 2 using my solution as well:
(N + 1)^3 - (N - 1)^3 = 6N^2 + 2 (although my math is rusty, so I'm not sure how!)
*/
