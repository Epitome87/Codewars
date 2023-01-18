/*
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

// My eh solution:
const hexHash = (code) => {
  const hexes = [...code].map((x) =>
    x.charCodeAt(0).toString(16).replace(/[a-z]/gi, '')
  );
  return hexes.reduce(
    (totalSum, curr) =>
      totalSum + [...curr].reduce((sum, val) => sum + +val, 0),
    0
  );
};

// Top user solution:
const hexHash = (str) =>
  str.length === 0
    ? 0
    : str
        .replace(/./g, (x) => x.codePointAt().toString(16))
        .match(/\d/g)
        .reduce((a, b) => +a + +b, 0);

// Another good user solution:
const hexHash = (string) =>
  (
    string.replace(/./g, (c) => c.charCodeAt(0).toString(16)).match(/\d/g) || []
  ).reduce((a, b) => a + parseInt(b), 0);

/* Takeaways:
1) Remember, there's Number.parseInt() as well as the global parseInt().
2) There's also just Number(int), which seems to be more recommended!
3) I did not need to reduce the hex array twice! I was essentially reducing each String,
and then reducing each character in that String. This is redundant; simply calling parseInt() on the
entire string would have given the correct result.
*/
