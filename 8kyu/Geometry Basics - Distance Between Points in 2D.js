/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/

// My solution (had to Google the calculation -- oops!):
const distanceBetweenPoints = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

// Clever user solution:
distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

// Takeaway: Don't forget the Math.hypot method!
