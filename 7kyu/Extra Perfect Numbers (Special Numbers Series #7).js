/*
Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
Explanation:
(1)10 =(1)2
First and last bits as set bits.

(3)10 = (11)2
First and last bits as set bits.

extraPerfect(7)  ==>  return {1,3,5,7}
Explanation:
(5)10 = (101)2
First and last bits as set bits.

(7)10 = (111)2
First and last bits as set bits.
*/

// My solution:
const extraPerfect = (n) => Array.from({ length: n % 2 ? n / 2 + 1 : Math.floor(n / 2) }, (v, i) => i * 2 + 1);

// Clever user solution similar to mine:
const extraPerfect = (n) => Array.from({ length: (n + 1) / 2 }, (_, i) => 2 * i + 1);

// Top user solution:
function extraPerfect(n) {
  result = [];
  for (i = 1; i <= n; i = i + 2) {
    result.push(i);
  }
  return result;
}

/* Takeaways:
1) An "Extra Perfect" number (where first and last bit are 1, aka a 'set bit') are just odd numbers!
*/
