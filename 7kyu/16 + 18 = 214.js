/*
For this kata you will have to forget how to add two numbers.

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

// My eh solution:
const add = (num1, num2) => {
  let res = '';

  let num1Str = num1.toString();
  let num2Str = num2.toString();

  const maxLength = Math.max(num1Str.length, num2Str.length);

  num1Str = num1Str.padStart(num1Str.length - num2Str.length > 0 ? 0 : maxLength, '0');
  num2Str = num2Str.padStart(num2Str.length - num1Str.length > 0 ? 0 : maxLength, '0');

  for (let i = 0; i < maxLength; i++) {
    res += `${+num1Str[i] + +num2Str[i]}`;
  }

  return +res;
};

// Top user solution:
function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse();
  let arr2 = num2.toString().split('').reverse();
  let arr3 = [];
  for (let i = 0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0));
  }
  return parseInt(arr3.reverse().join(''));
}

// Clever user solution:
function add(a, b) {
  return a * b ? +`${add((a / 10) | 0, (b / 10) | 0)}${(a % 10) + (b % 10)}` : a + b;
}

// Another clever user solution:
function add(a, b) {
  let s = '';

  while (a + b) {
    s = (a % 10) + (b % 10) + s;
    a = (a / 10) | 0;
    b = (b / 10) | 0;
  }

  return +s;
}
