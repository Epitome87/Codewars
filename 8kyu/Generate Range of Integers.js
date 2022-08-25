/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/

// My straightforward solution:
const generateRange = (min, max, step) => {
  const res = [];

  for (let i = min; i <= max; i += step) {
    res.push(i);
  }

  return res;
};

// My "clever" solution:
const generateRange = (min, max, step) =>
  Array.from(
    { length: Math.floor((max - min) / step) + 1 },
    (v, i) => min + i * step
  );

// Clever user solution:
function generateRange(min, max, step) {
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}

// "Clever" user solution (though I don't like modifying the variable "min", as then it no longer has an appropriate name):
function generateRange(min, max, step) {
  for (var res = []; min <= max; min += step) res.push(min);
  return res;
}
