/*
As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

Note: input will be always > 21

Examples:
32  -->  "32? That's just 20, in base 16!"
39  -->  "39? That's just 21, in base 19!"
Hint: if you don't know (enough) about numeral systems and radix, just observe the pattern!
*/

// My solution:
const womensAge = (n) => `${n}? That's just ${20 + (n % 2)}, in base ${Math.floor(n / 2)}!`;

// Good user solution:
function womensAge(n) {
  let alternativeAgeBase = Math.floor(n / 2);
  let alternativeAge = n % 2 ? 21 : 20;

  return `${n}? That\'s just ${alternativeAge}, in base ${alternativeAgeBase}!`;
}

/* Takeaways:
1) To arrive at the solution, we can simply note by the test conditions that the output base is always about half the age input.
2) We can observe that in particular, when age is an even number, the output base IS half. When age is odd, the output base is age / 2, truncated.
3) We can finally observe based on the provided test results that we return 20 as the age when the input age is even, otherwise we return 21.
*/
