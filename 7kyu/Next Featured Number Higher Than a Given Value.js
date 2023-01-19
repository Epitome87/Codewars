/*
Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

their digits occur only once

they are odd

they are multiple of three

nextNumb(12) == 15

nextNumb(13) == 15

nextNumb(99) == 105

nextNumb(999999) == 1023459

nextNumber(9999999999) == "There is no possible number that
fulfills those requirements"
Enjoy the kata!!
*/

// My solution:
const nextNumb = (val) => {
  if (val >= 9999999999)
    return 'There is no possible number that fulfills those requirements';
  for (let i = val + 1; i < 9999999999; i++) {
    if (
      i % 2 &&
      i % 3 === 0 &&
      new Set([...i.toString()]).size === i.toString().length
    )
      return i;
  }
};

// Top user solution:
function nextNumb(val) {
  while (val < 9876543210) {
    val++;
    if (
      val % 2 &&
      !(val % 3) &&
      val.toString().match(/^(?!.*(.).*\1)\d{1,10}$/)
    ) {
      return val;
    }
  }
  return 'There is no possible number that fulfills those requirements';
}
