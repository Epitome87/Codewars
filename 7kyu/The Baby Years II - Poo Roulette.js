/*
As a parent, nappy changing is a never ending part of your daily routine. How the mighty have fallen!

A friend: "Fancy popping to the pub like the old days?" You: "Nah, I'll stay in and wipe poo off a baby thanks, I've moved on."

It's important to establish that a small is indeed coming from the baby before you begin the process of changing, because time is now percious and you don't want any false alarms.

The trouble is that your partner is also smelly...

You will be given a 2-dimensional array (p) that looks similar to below. Empty spots are represented by 'o' and your baby's bottom is represented by 'B'. Any scent is represented by '~'.

Example 1: Baby smell

[
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
]
Example 1: Partner smell

[
[ 'B', '~', '~', '~', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
If the smell is rising vertically, it's safe to say it's coming from the baby - return "Get the wipes!". If the smell is moving horizontally.. it's probably your partner trying to pass it off as the baby - return "You disgust me!". in both cases the three scents must be connected to the baby.

If there is no scent, or there are less than three in a row, there is no baby, or they do not form a straight vertical of horizontal line, return "Calm before the storm".

Lines of scent cannot pass through the baby (or if they do they dont count).
*/

// My original eh solution:
const pooRoulette = (p) => {
  let babyRow = p.reduce((acc, curr, idx) => (curr.includes('B') ? idx : acc), -1);
  let babyCol = p[babyRow].indexOf('B');
  let scentCount = 0;

  for (let i = babyRow - 3; i < babyRow + 3; i++) {
    if (i < 0 || i >= p.length) continue;
    if (p[i][babyCol] === '~') {
      scentCount++;
      if (scentCount >= 3) return 'Get the wipes!';
    } else scentCount = 0;
  }

  return /B~~~|~~~B/.test(p[babyRow].join('')) ? 'You disgust me!' : 'Calm before the storm';
};

// Top user solution:
function pooRoulette(p) {
  let arr = p.reduce((acc, val) => acc.concat(val), []);
  let b = arr.indexOf('B');
  if (
    (arr[b + 1] == '~' && arr[b + 2] == '~' && arr[b + 3] == '~') ||
    (arr[b - 1] == '~' && arr[b - 2] == '~' && arr[b - 3] == '~')
  ) {
    return 'You disgust me!';
  } else if (arr[b - 7] == '~' && arr[b - 14] == '~' && arr[b - 21] == '~') {
    return 'Get the wipes!';
  }
  return 'Calm before the storm';
}

// Clever user solution:
function pooRoulette(p) {
  const transpose = (arr) => arr[0].map((_, j) => arr.map((r) => r[j]));
  const match = (xs) => xs.join('').match(/B~{3,}|~{3,}B/);
  if (p.some(match)) return 'You disgust me!';
  if (transpose(p).some(match)) return 'Get the wipes!';
  return 'Calm before the storm';
}

/* Takeaways:
1) Good way to flatten a 2D array:
const flatArr = arr.reduce((acc,val)=> acc.concat(val),[]);
2) Good way to transpose an array:
const transpose = (arr) => arr[0].map((_, j) => arr.map((r) => r[j]));
*/
