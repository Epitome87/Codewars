/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

// My eh solution:
const insertDash = (num) => {
  const res = [];
  const str = String(num);
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 && str[i + 1] % 2) res.push(str[i] + '-');
    else res.push(str[i]);
  }
  return res.join('');
};

// Top solution:
function insertDash(num) {
  return num.toString().replace(/[13579](?=[13579])/g, '$&-');
}

/* Takeaways:
 1) Remember the forward look-ahead in Regex! I had the same logic originally, except 
 it was just a capture group, not a forward look-ahead.
 */
