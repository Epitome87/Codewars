/*
3209094% of 1,2022,651 of 7,992Avanta
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (24)
Discourse (91)
Translations
Fork|Collect|
How satisfied are you with this kata?VERYSOMEWHATNONE
If you finish this kata, you can try Insane Coloured Triangles by Bubbler, which is a much harder version of this one.

A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.

The different possibilities are:

Colour here:        G G        B G        R G        B R
Becomes colour:      G          R          B          G
With a bigger example:

R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G
You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would the given RRGBRGBB you should return G.

The input string will only contain the uppercase letters R, G, B and there will be at least one letter so you do not have to test for invalid input.
If you are only given one colour as the input, return that colour.
Adapted from the 2017 British Informatics Olympiad
*/

// My initial solution:
const triangle = (row) => {
  if (row.length === 1) return row;

  let colors = ['R', 'G', 'B'];
  let str = '';

  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) str += row[i];
    else {
      for (let c = 0; c < colors.length; c++) {
        if (![...row[i], ...row[i + 1]].includes(colors[c])) str += colors[c];
      }
    }
  }

  return triangle(str);
};

// Top user solution:
const triangle = (row) => {
  let reduced = row.length > 1 ? '' : row;
  for (let i = 0; i < row.length - 1; i += 1) {
    reduced +=
      row[i] == row[i + 1]
        ? row[i]
        : 'RGB'.replace(row[i], '').replace(row[i + 1], '');
  }
  return reduced.length > 1 ? triangle(reduced) : reduced;
};

// User solution using switch:
function triangle(row) {
  return row.length == 1 ? row : triangle(processedRow(row));
}

function processedRow(row) {
  return row
    .split('')
    .map((el, i) =>
      i == row.length - 1 ? null : sumLetters(row[i], row[i + 1])
    )
    .join('');
}

function sumLetters(a, b) {
  switch (a + b) {
    case 'BG':
    case 'GB':
    case 'RR':
      return 'R';
      break;
    case 'BR':
    case 'RB':
    case 'GG':
      return 'G';
      break;
    case 'RG':
    case 'GR':
    case 'BB':
      return 'B';
      break;
  }
}

/* Takeaways:
1) When looking for what color has NOT been used, note the user's clever use of replacing the colors that do exist with empty space. This then leaves the unused color.
*/
