/*
You can paint an asperand by pixels in three steps:

First you paint a "border" - the perimeter of a square with sides k.
Then you need to paint a pixel, the top-left corner of which touches the bottom-right corner of your "border". Let's call it the "bridge".
Finally, you will need to paint the spots that are at 1 pixel distance from your "border", including the pixel of which the bottom-left corner is touching the top-right corner of the "bridge", but excluding any others that would be touching the "bridge".
Here are some examples of this:

(Visit Kata for link to illustration)

Examples for 0<k<5

Your task is to find the number of pixels that need to be painted, for different k:

k = 1 => 11
k = 2 => 18
k = 3 => 26
k = 4 => 34

# Limitations are 1 ≤ k ≤ 1e9
The idea for this kata was taken from the Ukrainian Informatics Olympiad 2023.
*/

// My solution:
const countPixels = (k) => (k > 1 ? k * 8 + 2 : 11);

// Top user solution:
function countPixels(k) {
  return Math.max(11, 8 * k + 2);
}

// Another good user solution:
const countPixels = (k) => (k === 1) + 8 * k + 2;

/* Takeaways:
1) Rather than using the ternary operator, consider clever uses
for false and true being coerced to 0 and 1.
*/
