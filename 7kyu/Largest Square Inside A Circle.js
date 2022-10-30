/*
Determine the area of the largest square that can fit inside a circle with radius r.
*/

// My solution:
const areaLargestSquare = (r) => 2 * Math.pow(r, 2);

// Top user solution:
const areaLargestSquare = (r) => 2 * r * r;

/* Takeaways:
1) Memorize this formula for inscribed square: 2r^2
*/
