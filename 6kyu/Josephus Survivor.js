/*
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
*/

// My solution:
const josephusSurvivor = (n, k) => {
  const circle = Array.from({ length: n }, (_, i) => i + 1);
  let result = [];
  let index = 0;

  while (circle.length > 0) {
    index = (index + k - 1) % circle.length;
    result = [...result, ...circle.splice(index, 1)];
  }

  return result.slice(-1)[0];
};

// Top user solution:
function josephusSurvivor(n, k) {
  return n < 1 ? 1 : ((josephusSurvivor(n - 1, k) + --k) % n) + 1;
}

// Another good user solution:
function josephusSurvivor(n, k) {
  res = 1;
  for (var i = 1; i <= n; i++) res = ((res + k - 1) % i) + 1;
  return res;
}
