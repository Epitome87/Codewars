/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

// My solution:
const predictAge = (...ages) => Math.floor(Math.sqrt(ages.reduce((acc, curr) => acc + curr * curr, 0)) / 2);

// Very clever user solution:
const predictAge = (...ages) => (Math.hypot(...ages) / 2) | 0;

/* Takeways:
1) Remember the Math.hypot method! T
he Math.hypot() function returns the square root of the sum of squares of its arguments, that is:

Math.hypot ( v 1 , v 2 , … , v n ) = 
∑
i = 1
n
 v i 2
 = 
v 1 2 + v 2 2 + … + v n 2
1, v_2, \dots, v_n)} = \sqrt{\sum{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}
*/
