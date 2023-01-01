/*
391592% of 5652,078 of 3,040K-Calderon-ASC
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (6)
Discourse (43)
Translations
Fork|Collect|
How satisfied are you with this kata?VERYSOMEWHATNONE
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

"Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"
*/

// My solution:
const spongeMeme = (sentence) =>
  sentence
    .split('')
    .map((v, idx) => (idx % 2 !== 0 ? v.toLowerCase() : v.toUpperCase()))
    .join('');
