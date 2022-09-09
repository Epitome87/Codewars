/*
Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */
Example:

toBinary(1)  /* should return 1 */
toBinary(5)  /* should return 101 */
toBinary(11) /* should return 1011 */
*/

// My solution:
const toBinary = (n) => +n.toString(2);

/* Takeaways:
1) VERY IMPORTANT to remember: Convert a number to binary with num.toString(2). This is a string, so just convert this then to a number.
*/