/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'
For ASCII table, you can refer to http://www.asciitable.com/
*/

// My solution:
const getChar = (c) => String.fromCharCode(c);

// Top user solution:
const getChar = String.fromCharCode;

/* Takeaways:
1) Although not incredibly beneficial, remember that we can sometimes get away without adding the (params) at the end of a function.
One user explains how this is possible:
String.fromCharCode is a function that takes 1 argument (ascii value) and returns a character, which is exactly what getChar function requires, so getChar = String.fromCharCode is simply assigning that function, creating an alias for the same function. So then calling getChar(c) is equal to calling String.fromCharCode(c).
*/
