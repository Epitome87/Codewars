/*
A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

Examples:

parseNumbers(['10']) // should return [10]
parseNumbers(['-1','0','1']) // should return [-1,0,1]

Original code:
const parseNumbers = (intStrs) => intStrs.map(parseInt);
*/

// My solution:
const parseNumbers = (intStrs) => intStrs.map((n) => parseInt(n));

/* Takeaways:
1) I honestly don't know why the original code doesn't work properly! Seems to only work for the first element in the array.
*/
