/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

// My solution:
const getSize = (width, height, depth) => [
  6 * (width * height + width * depth + height * depth),
  width * height * depth,
];
