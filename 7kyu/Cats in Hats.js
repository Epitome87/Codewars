/*
The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

The Cat In The Hat is 2,000,000 cat units tall.

Each cat is 2.5 times bigger than the cat underneath their hat.

Find the total height of the cats if they are standing on top of one another.

Counting starts from the Cat In The Hat

n = the number of cats

fix to 3 decimal places.
*/

// My solution:
const height = (n) =>
  Array.from({ length: n + 1 }, (_, i) => 2000000 / Math.pow(2.5, i))
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(3);

// My original solution:
const height = (n) => {
  let height = 0;
  let initial = 2000000;
  for (let i = 0; i <= n; i++) {
    height += initial / Math.pow(2.5, i);
  }
  return height.toFixed(3);
};

// Top user solution:
function height(n) {
  return ((2000000 * (1 - Math.pow(0.4, n + 1))) / (1 - 0.4)).toFixed(3);
}
