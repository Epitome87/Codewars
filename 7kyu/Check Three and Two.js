/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

// My awful first solution:
const checkThreeAndTwo = (arr) => {
  const numA = arr.filter((n) => n === 'a').length;
  const numB = arr.filter((n) => n === 'b').length;
  const numC = arr.filter((n) => n === 'c').length;

  if (numA === 3 && numB === 2) return true;
  if (numA === 3 && numC === 2) return true;
  if (numB === 3 && numA === 2) return true;
  if (numB === 3 && numC === 2) return true;
  if (numC === 3 && numA === 2) return true;
  if (numC === 3 && numB === 2) return true;

  return false;
};

// Top user solution:
function checkThreeAndTwo(array) {
  const counts = array.reduce((result, letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }

    return result;
  }, {});

  const containsThree = Object.values(counts).some((x) => x === 3);
  const containsTwo = Object.values(counts).some((x) => x === 2);

  return containsThree && containsTwo;
}

// Clever user solution:
function checkThreeAndTwo(array) {
  var [a, b, c, d, e] = [...array].sort();
  return a !== e && ((a === b && c === e) || (a === c && d === e));
}

// Another clever user solution:
function checkThreeAndTwo(arr) {
  let res = [];
  res.push(arr.filter((x) => x === 'a').length);
  res.push(arr.filter((x) => x === 'b').length);
  res.push(arr.filter((x) => x === 'c').length);
  return res.includes(2) && res.includes(3);
}
