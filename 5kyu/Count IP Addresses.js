/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

// My one-line solution:
const ipsBetween = (start, end, v1 = start.split('.'), v2 = end.split('.')) =>
  v1.reduce((acc, _, i) => acc * 256 + (v2[i] - v1[i]), 0);
// My original solution:
function ipsBetween(start, end) {
  const [thousands1, hundreds1, tens1, ones1] = start.split('.');
  const [thousands2, hundreds2, tens2, ones2] = end.split('.');
  const thousands = (thousands2 - thousands1) * 16777216;
  const hundreds = (hundreds2 - hundreds1) * 65536;
  const tens = (tens2 - tens1) * 256;
  const ones = ones2 - ones1;

  return [thousands, hundreds, tens, ones].reduce((acc, curr) => acc + curr, 0);
}

// Top user solution:
function ipsBetween(start, end) {
  const num = (ip) =>
    ip
      .split('.')
      .map((x) => parseInt(x))
      .reduce((acc, e) => acc * 256 + e);

  return num(end) - num(start);
}

/* Takeaways:
1) In my solution, I could have eliminated multiplying 256 by the index and just multiplied the accumulator variable in the reduce function by 256 each time. (Note: I refactored my solution to do this.)
*/
