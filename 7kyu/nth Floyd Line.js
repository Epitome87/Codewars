/*
The Floyd's triangle is a right-angled triangular array of natural numbers listing them in order, in lines of increasing length, so a Floyds triangle of size 6 looks like:

1
2  3
4  5  6
7  8  9  10
11 12 13 14 15
16 17 18 19 20 21
    ...
In this kata you're given a number, and expected to return the line number it falls in, in the Floyd's triangle

Examples (input -> output)
3 -> 2 (i.e the number `3` falls in line 2 of the triangle)
17 -> 6
22 -> 7
499502 -> 1000
Constraints
1 <= n <= 109
*/

// My solution:
const nthFloyd = (n) => Math.ceil((-1 + Math.sqrt(1 + 8 * n)) / 2);

// Clever user solution:
const nthFloyd = (n) => Math.round(2 * (n / 2) ** (1 / 2));

/* Takeaways:
1) I basically took the fact that the example illustration looked like how we can calculate the sum of numbers 1 - n with: n * (n + 1) / 2. Here, n is our input. We can solve by using the quadratic equation, simplifying by noting that a and b are always 1, and c is double the input n.
*/
