/*
John's each hand has five fingers(If you are surprised, please tell me how many fingers you have ;-) Even more amazing is that when he was a child, he already had 5 fingers(one hand). At that time, he often to count the number by using his fingers.

He is counting this way:

a - Thumb
b - Index finger
c - Middle finger
d - Ring finger
e - Little finger

 a  b  c  d  e
--------------
 1  2  3  4  5
 9  8  7  6
   10 11 12 13
17 16 15 14
   18 19 20 21
.. .. .. ..
   .. .. .. ..
So the question is: when John counting to number n, which is the corresponding finger?

Task
Complete the function which accepts an integer, and returns the name of the finger on which the counting will end: "Thumb", "Index finger", "Middle finger", "Ring finger", or "Little finger".

Examples
10     =>  "Index finger"
20     =>  "Ring finger"
30     =>  "Ring finger"
50     =>  "Index finger"
100    =>  "Ring finger"
1000   =>  "Index finger"
10000  =>  "Index finger"
*/

// My solution:
const whichFinger = (n) =>
  [
    'Index finger',
    'Thumb',
    'Index finger',
    'Middle finger',
    'Ring finger',
    'Little finger',
    'Ring finger',
    'Middle finger',
  ][n & 7];

// Good user solution:
function whichFinger(n) {
  const fingers = {
    0: 'Index finger',
    1: 'Thumb',
    2: 'Index finger',
    3: 'Middle finger',
    4: 'Ring finger',
    5: 'Little finger',
    6: 'Ring finger',
    7: 'Middle finger',
  };
  return fingers[n % 8];
}

// Another good user solution:
function whichFinger(n) {
  switch ((n - 1) & 7) {
    case 0:
      return 'Thumb';
    case 1:
    case 7:
      return 'Index finger';
    case 2:
    case 6:
      return 'Middle finger';
    case 3:
    case 5:
      return 'Ring finger';
    case 4:
      return 'Little finger';
  }
}

/* Takeaways:
1) In this context, the Bitwise AND operator of n & 7 is similar to n % 8.
2) The Kata diagrams the finger-counting process rather poorly. We can think of it
more like alternating rows of 5 fingers being used to count and then 3 fingers:
1   2   3   4   5
    8   7   6
9   10  11  12  13
    16  15  14
17  18  19  20  21
We can then simplify this to a repeating pattern of numbers:
1   2   3   4   5
    8   7   6
1   2   3   4   5
    8   7   6
And to work with 0-index of arrays, we can change the 8's to 7's:
1   2   3   4   5
    0   7   6
1   2   3   4   5
    0   7   6
From this we can put these fingers into an array, noting the index finger counts every 0 and 2
numbers, the thumb counts every 1, the middle finger counts every 3 and 7, the ring counts
every 4 and 6, and the little finger counts every 5.
*/
