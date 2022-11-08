/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

// My straightforward solution:
const absentVowel = (x) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let vowel of vowels) {
    if (!x.includes(vowel)) return vowels.indexOf(vowel);
  }
};

// Clever user solution:
const absentVowel = (string) => [...'aeiou'].findIndex((letter) => !string.includes(letter));

/* Takeaways:
1) Array.prototype.findIndex()
The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
*/
