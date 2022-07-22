/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// My not-so-great solution:
function sortArray(array) {
  let odds = array.filter((num) => num % 2);
  odds.sort((a, b) => a - b);

  const result = [...array];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      result[i] = odds.shift();
    }
  }

  return result;
}

// My favorite user solution (similar enough to mine, just more elegant).
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
