/*
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

For example, with n=7 and k=3 josephus(7,3) should act this way.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
For more info, browse the Josephus Permutation page on wikipedia; related kata: Josephus Survivor.
*/

// My solution:
const josephus = (items, k) => {
  const i = [...items];
  const res = [];
  let index = 0;

  while (i.length > 0) {
    index = (index + k - 1) % i.length;
    res.push(i[index]);
    i.splice(index, 1);
  }

  return res;
};

// Top user solution:
function josephus(items, k) {
  var result = [],
    index = 0;

  while (items.length > 0) {
    index = (index + k - 1) % items.length;
    result = result.concat(items.splice(index, 1));
  }

  return result;
}

// Another good user solution:
function josephus(items, k) {
  var dest = [],
    i = 0;

  while (items.length > 0) {
    dest.push(items.splice((i = (i + k - 1) % items.length), 1)[0]);
  }

  return dest;
}

/* Takeaways:
1) For some reason, I struggled to realize you need to subtract 1 from the calculation of the new index.
*/
