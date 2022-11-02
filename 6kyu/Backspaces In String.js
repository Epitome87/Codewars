/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// My solutions:
function cleanString(s) {
  return [...s].reduce(
    (acc, curr) => (curr === '#' ? acc.slice(0, -1) : acc + curr),
    ''
  );
}

function cleanString(s) {
  const res = [];
  for (let c of s) {
    if (c === '#') res.pop();
    else res.push(c);
  }
  return res.join('');
}
