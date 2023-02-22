/*
Task
Write function which validates an input string. If the string is a perfect square return true,false otherwise.

What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!
Function input:
perfectSquare = "...\n...\n...";    

// This represents the following Perfect Square:

`...
 ...
 ...`
                               
notPerfect = "..,\n..\n...";

// This is not a Perfect Square:

`..,
 ..
 ...`
*/

// My solution:
const perfectSquare = (str) => {
  const lines = str.split('\n');
  for (const line of lines) {
    if (
      ![...line].every((char) => char === '.') ||
      line.length !== lines.length
    )
      return false;
  }
  return true;
};

// Top user solution:
function perfectSquare(string) {
  let lines = string.split('\n'),
    len = lines.length,
    rex = RegExp('^\\.{' + len + '}$');
  return lines.every((line) => rex.test(line));
}

// Clever user solution:
const perfectSquare = (string) =>
  string.split(/\n/).every((val, _, arr) => val === `.`.repeat(arr.length));
