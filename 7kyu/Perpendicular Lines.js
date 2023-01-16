/*
You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle

n will always be greater than or equal to 0
Examples with 3 and 4 lines
(Visit Kata for diagrams)
*/

// My solution:
const maxBisectors = (n) => (n ** 2 / 4) ^ 0;

// My other solution:
const maxBisectors = (n) => Math.floor(n ** 2 / 4);

// Top user solution:
const maxBisectors = (n) => (n ** 2 / 4) | 0;
