/*
Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true
Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
*/

// My eh solution:
const containAllRots = (str, arr) => {
  const rots = [];

  for (let i = 0; i < str.length; i++) {
    rots.push(str.slice(i) + str.slice(0, i));
  }

  for (let rot of rots) {
    if (!arr.includes(rot)) return false;
  }

  return true;
};

// Top solution (basically refactored version of mine):
function containAllRots(str, arr) {
  for (var i = 0; i < str.length; i++) {
    if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
      return false;
    }
  }
  return true;
}

// Clever user solution:
function containAllRots(strng, arr) {
  return [...strng]
    .map((_, i) => strng.substr(i) + strng.slice(0, i))
    .every((x) => arr.includes(x));
}
