/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

// My refactored solution:
const multiplicationTable = (size) =>
  [...Array(size)].map((val, i) => [...Array(size)].map((val, j) => (i + 1) * (j + 1)));

// My original solution:
const multiplicationTable = (size) => {
  const table = [];

  for (let r = 1; r <= size; r++) {
    const row = [];

    for (let c = 1; c <= size; c++) {
      row.push(r * c);
    }

    table.push(row);
  }

  return table;
};

/* Takeaways:
1) Sometimes creating an array from nothing (using Array.from() or Array(size).fill(value) can be difficult. Since Array(size) by itself creates a SPARSE ARRAY, and not one we can actually use .map on, we can spread that result in an array:
[...Array(size).map()] -- very useful!
*/
