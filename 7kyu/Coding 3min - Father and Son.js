/*
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

For example:

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-)
*/

// My solution:
const sc = (s) => {
  let obj = {};
  [...s].forEach((x) => (obj[x] = obj[x] ? obj[x] + 1 : 1));
  return s
    .split('')
    .map((v) =>
      obj[v.toUpperCase()] >= 1 && obj[v.toLowerCase()] >= 1 ? v : ''
    )
    .join('');
};

// Top user solution:
function sc(s) {
  var str = '';
  for (var i = 0; i < s.length; ++i)
    if (
      s.indexOf(s[i].toLowerCase()) != -1 &&
      s.indexOf(s[i].toUpperCase()) != -1
    )
      str += s[i];
  return str;
}
