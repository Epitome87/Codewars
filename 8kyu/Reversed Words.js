/*
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

// My solution:
const reverseWords = (str) => str.split(' ').reverse().join(' ');
