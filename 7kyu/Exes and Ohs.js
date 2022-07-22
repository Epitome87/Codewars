/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// My solution:
const XO = (str) => {
  const stringArray = str.split('');

  const numberOfX = stringArray.filter((char) => char.toLowerCase() === 'x').length;
  const numberOfO = stringArray.filter((char) => char.toLowerCase() === 'o').length;

  return numberOfX === numberOfO;
};

// TODO: YET AGAIN I toLowerCase at poor time. Could have done this:
// const XO = (str) => {
//   const stringArray = str.toLowerCase().split('');

//   const numberOfX = stringArray.filter((char) => char === 'x').length;
//   const numberOfO = stringArray.filter((char) => char === 'o').length;

//   return numberOfX === numberOfO;
// };

// Top user solution:
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
