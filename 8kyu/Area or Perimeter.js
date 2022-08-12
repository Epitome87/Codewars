/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/

// My solution:
const areaOrPerimeter = (length, width) => (length === width ? length * width : 2 * length + 2 * width);

// Better user solution (they simplified the perimeter formula, duh!):
const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));
