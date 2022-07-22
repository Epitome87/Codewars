/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// My solution:
const highAndLow = (numbers) => {
  const sortedNumbers = numbers.split(' ').sort((a, b) => b - a);

  return `${sortedNumbers[0]} ${sortedNumbers[sortedNumbers.length - 1]}`;
};

// Clever user solution, converting each string to a Number first to ensure Math.max works:
function highAndLow(numbers) {
  let arr = numbers.split(' ').map(Number);
  return Math.max(...arr) + ' ' + Math.min(...arr);
}

// Another clever user solution, skipping the map call (due to the fact Math.max work with string representations of numbers):
function highAndLow(numbers) {
  numberArray = numbers.split(' ');
  return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`;
}
