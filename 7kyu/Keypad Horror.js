/*
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only
*/

// My solution:
const computerToPhone = (numbers) => [...numbers].map((n) => [0, 7, 8, 9, 4, 5, 6, 1, 2, 3][n]).join('');

// Could have also done:
const computerToPhone = (numbers) => [...numbers].map((n) => '0789456123'[n]).join('');

// User solution utilizing replace instead of map:
function computerToPhone(numbers) {
  var map = [0, 7, 8, 9, 4, 5, 6, 1, 2, 3];

  return numbers.replace(/\d/g, function (d) {
    return map[d];
  });
}
