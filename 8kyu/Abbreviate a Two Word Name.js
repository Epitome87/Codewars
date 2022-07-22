/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// My one-line solution (wouldn't do this in production code -- it's not very readable!)
const abbrevName = (name) => `${name.split(' ')[0][0].toUpperCase()}.${name.split(' ')[1][0].toUpperCase()}`;

// My favorite user solution:
// function abbrevName(name) {
//   return name
//     .split(' ')
//     .map((i) => i[0].toUpperCase())
//     .join('.');
// }
