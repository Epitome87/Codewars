/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
*/

// My solution:
const findDigit = (num, nth) => {
  if (nth <= 0) return -1;
  let nums = String(Math.abs(num));
  return Number(nums.slice(nums.length - nth, nums.length - nth + 1));
};

// Clever user solution:
const findDigit = (num, nth) => (nth <= 0 ? -1 : +([...('' + Math.abs(num))].reverse()[nth - 1] || 0));
