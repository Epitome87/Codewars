/*
Task: concatenate one or more letters to the end of a given input string to create a string that reads the same forward as backward.

Specifications

Letters can only be added to the right hand side of the input string.

You are required to add at least one letter to the input string.

The shorter return string is the correct one. ie.. (ab)=> abba is Wrong, while (ab)=> aba is Right.

Inputs will consist of one or more letters, upper and lower case.

Strings are case sensitive. ie..(Gn)=> gng is Wrong, while (Gn)=> GnG is right.

Examples:

(a) => a + a => aa

(GG) => GG + G => GGG

(Ab) => Ab + A => AbA

(aba) => aba + ba => ababa

(aab) => aab + aa => aabaa
*/

// My solution:
const complete = (str) => {
  if (str.length === 1) return str + str;
  for (let i = 1; i < str.length; i++) {
    if (str.slice(i) === [...str.slice(i)].reverse().join('')) {
      return str + [...str.slice(0, i)].reverse().join('');
    }
  }
};

// Top user solution:
const complete = (str) => {
  for (let i = 1; i <= str.length; i++) {
    if (str.slice(i) == [...str.slice(i)].reverse().join(''))
      return str + [...str.slice(0, i)].reverse().join('');
  }
};

/* Takeaways:
1) Although the top user solution works, it is rather incidental that it covers the case 
where string length is 1. The logic is not very obvious, so I prefer my solution!
By letting i <= str.length rather than i < str.length, we eventually slice at too large of an index.
This results in str.slice(i) producing "", which is equal to the reverse of itself, and thus
the correct result is returned.
*/
