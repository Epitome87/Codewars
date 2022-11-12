/*
Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

Ruby: If you get stuck, you can read up here:

http://www.rubycuts.com/enum-any
*/

// My solution:
const any = (arr, fun) => (arr || []).some(fun);

/* Takeaways:
1) Although I thought I was being clever with returning false for the case that array is undefined or null, this appears to never be the case!
*/
