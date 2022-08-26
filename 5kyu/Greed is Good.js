/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

// My eh solution:
const score = (dice) => {
  let score = 0;
  let d = [...dice];

  // Check for triples
  for (let i = 1; i <= 6; i++) {
    if (isTriple(d, i)) {
      for (let n = 0; n < 3; n++) d.splice(d.indexOf(i), 1);
      // Reward for triple accordingly
      if (i === 1) score += 1000;
      else score += i * 100;
    }
  }

  // Check remaining die for single scores
  while (d.length > 0) {
    const roll = d.pop();
    if (roll === 1) score += 100;
    if (roll === 5) score += 50;
  }

  return score;
};

const isTriple = (dice, value) => {
  return (
    dice.reduce((acc, curr) => {
      value;
      acc;
      curr;
      return curr === value ? acc + 1 : acc;
    }, 0) >= 3
  );
};

// Top answer:
function score(dice) {
  var dc = [0, 0, 0, 0, 0, 0];
  var tdr = [1000, 200, 300, 400, 500, 600];
  var sdr = [100, 0, 0, 0, 50, 0];
  dice.forEach(function (x) {
    dc[x - 1]++;
  });
  return dc.reduce(function (s, x, i) {
    return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
  }, 0);
}

// Another top user solution, more readable and straightforward:
function score(dice) {
  var six = 0,
    five = 0,
    four = 0,
    three = 0,
    too = 0,
    one = 0;
  var i = 0;
  while (i < 5) {
    if (dice[i] == 6) {
      six++;
    }
    if (dice[i] == 5) {
      five++;
    }
    if (dice[i] == 4) {
      four++;
    }
    if (dice[i] == 3) {
      three++;
    }
    if (dice[i] == 2) {
      too++;
    }
    if (dice[i] == 1) {
      one++;
    }
    i++;
  }
  var r = 0;
  if (one > 2) {
    r += 1000;
    one -= 3;
  }
  if (six > 2) {
    r += 600;
  }
  if (five > 2) {
    r += 500;
    five -= 3;
  }
  if (four > 2) {
    r += 400;
  }
  if (three > 2) {
    r += 300;
  }
  if (too > 2) {
    r += 200;
  }
  r += one * 100;
  r += five * 50;
  return r;
}

// Clever user solution:
function score(dice) {
  if (dice.length !== 5) return 0;

  let diceStr = dice.sort().join('');
  let score = 0;
  const rules = [
    { reg: /111/, score: 1000 },
    { reg: /666/, score: 600 },
    { reg: /555/, score: 500 },
    { reg: /444/, score: 400 },
    { reg: /333/, score: 300 },
    { reg: /222/, score: 200 },
    { reg: /1/, score: 100 },
    { reg: /5/, score: 50 },
  ];

  rules.forEach((rule) => {
    while (rule.reg.test(diceStr)) {
      diceStr = diceStr.replace(rule.reg, '');
      score += rule.score;
    }
  });

  return score;
}
