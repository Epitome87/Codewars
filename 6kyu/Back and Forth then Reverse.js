/*
Task
A list S will be given. You need to generate a list T from it by following the given process:

Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T
Note
size of S goes up to 10^6
Keep the efficiency of your code in mind.
Do not mutate the Input.
*/

// My eh (but fast-enough) solution:
const arrange = (arr) => {
  const res = [];
  const length = arr.length;

  for (let i = 1; i < length / 2 + 1; i++) {
    const first = arr[i - 1];
    const last = arr[length - i];

    if (i - 1 === length - i) res.push(first);
    else {
      if (i % 2) res.push(first, last);
      else res.push(last, first);
    }
  }

  return res;
};

// Top user solution:
function arrange(s) {
  let t = [];
  let first = 0;
  let last = s.length - 1;
  let count = 0;
  while (first <= last) {
    if (first != last && count === 0) {
      t[t.length] = s[first];
      t[t.length] = s[last];
      count++;
    } else if (first != last && count === 1) {
      t[t.length] = s[last];
      t[t.length] = s[first];
      count--;
    } else {
      t[t.length] = s[last];
    }
    first++;
    last--;
  }
  return t;
}

// My too-slow solution:
const arrange = (arr) => {
  const s = [...arr];
  const t = [];

  while (s.length) {
    const first = s.splice(0, 1)[0];
    const last = s.splice(-1)[0];
    if (first !== undefined) t.push(first);
    if (last !== undefined) t.push(last);
    s.reverse();
  }

  return t;
};

// Clever user solution:
const arrange = (s, l = s.length - 1) => s.map((_, i) => s[(i + 1) & 2 ? l - (i >> 1) : i >> 1]);

// Good user solution:
function arrange(s) {
  if (s.length == 1 || s.length == 0) return s;
  let T = [];
  for (let i = 0; i < s.length / 2; i++) {
    if (i % 2 == 0) T.push(s[i], s[s.length - (i + 1)]);
    else T.push(s[s.length - (i + 1)], s[i]);
  }
  if (T.length > s.length) T.pop();
  return T;
}

// NOTE: This is a relatively new Kata, so the top solutions may change greatly.
