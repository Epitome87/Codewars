/*
Sort the Vowels!
In this kata, we want to sort the vowels in a special format.

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
for the purpose of this kata, the vowels are : a e i o u
Return every character in its original case
Each line is separated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

// My solution:
const sortVowels = (str) =>
  typeof str === 'string' ? [...str].map((char) => (char.match(/[aeiou]/gi) ? `|${char}` : `${char}|`)).join('\n') : '';

/* Takeaways:
1) I should have actually used /[aeiou]/i.test(char) for determining if char is a vowel.
*/
