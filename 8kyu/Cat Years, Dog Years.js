/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

// My eh solution:
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears > 1) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears > 2) {
    catYears = catYears + (humanYears - 2) * 4;
    dogYears = dogYears + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};

// Top user solution:
var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

// Clever user solution:
const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];
