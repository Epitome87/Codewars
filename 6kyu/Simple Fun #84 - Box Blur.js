/*
Task
Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.

The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

Example
image = [
  [1, 1, 1], 
  [1, 7, 1], 
  [1, 1, 1]
]

result = [
  [1]
]
In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as floor((1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9) = floor(15 / 9) = 1.

Input/Output
[input] 2D integer array image

An image is stored as a rectangular matrix of non-negative integers.

Constraints:

3 ≤ image.length ≤ 15,

3 ≤ image[0].length ≤ 15,

0 ≤ image[i][j] ≤ 255.

[output] 2D integer array

A blurred image.
*/

// My solution:
const boxBlur = (image) => {
  const results = [];
  for (let row = 1; row < image.length - 1; row++) {
    const result = [];
    for (let col = 1; col < image[row].length - 1; col++) {
      let sum = 0;
      sum += image[row - 1][col - 1] + image[row - 1][col] + image[row - 1][col + 1];
      sum += image[row][col - 1] + image[row][col] + image[row][col + 1];
      sum += image[row + 1][col - 1] + image[row + 1][col] + image[row + 1][col + 1];
      result.push(Math.floor(sum / 9));
    }
    results.push(result);
  }
  return results;
};

// My solution:
const boxBlur = (image) => {
  const avg3By3 = (arr, r, c) => {
    let sum = 0;
    for (let row = r - 1; row <= r + 1; row++) {
      for (let col = c - 1; col <= c + 1; col++) {
        sum += arr[row][col];
      }
    }
    return (sum / 9) ^ 0;
  };

  const results = [];

  for (let row = 1; row < image.length - 1; row++) {
    const result = [];
    for (let col = 1; col < image[row].length - 1; col++) {
      result.push(avg3By3(image, row, col));
    }
    results.push(result);
  }
  return results;
};

// Top user solution:
const boxBlur = (image) =>
  image
    .slice(1, -1)
    .map((val) => val.slice(1, -1))
    .map((val, i) =>
      val.map(
        (_, j) =>
          ([...Array(3).keys()].reduce(
            (pre, x, _, arr) => pre + arr.reduce((pre, y) => pre + image[i + x][j + y], 0),
            0
          ) /
            9) ^
          0
      )
    );
