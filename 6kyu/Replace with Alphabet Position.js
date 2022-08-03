// My solution:
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const alphabetPosition = (text) =>
  text
    .toLowerCase()
    .split("")
    .map((x) => alphabet.indexOf(x) + 1)
    .filter((y) => y !== 0)
    .join(" ");

// Top user solution:
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}
