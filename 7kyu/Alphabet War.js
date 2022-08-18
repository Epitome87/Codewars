/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
Alphabet war Collection
Alphavet war
Alphabet war - airstrike - letters massacre
Alphabet wars - reinforces massacre
Alphabet wars - nuclear strike
Alphabet war - Wo lo loooooo priests join the war
*/

// My eh solution:
const alphabet = {
  w: { side: 'left', power: 4 },
  p: { side: 'left', power: 3 },
  b: { side: 'left', power: 2 },
  s: { side: 'left', power: 1 },
  m: { side: 'right', power: 4 },
  q: { side: 'right', power: 3 },
  d: { side: 'right', power: 2 },
  z: { side: 'right', power: 1 },
};

const alphabetWar = (fight) => {
  const fightArr = fight.split('');

  const powers = fightArr.reduce(
    (acc, curr) => {
      if (!alphabet[curr]) return acc;
      const side = alphabet[curr].side;
      if (side === 'left') return [acc[0] + alphabet[curr].power, acc[1]];
      else return [acc[0], acc[1] + alphabet[curr].power];
    },
    [0, 0]
  );

  return powers[0] > powers[1] ? 'Left side wins!' : powers[1] > powers[0] ? 'Right side wins!' : "Let's fight again!";
};

// Top user solution:
function alphabetWar(fight) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
  return result ? (result < 0 ? 'Left' : 'Right') + ' side wins!' : "Let's fight again!";
}

/* Takeways:
1) Rather than checking if a value is valid (not undefined), consider writing: arr[index] || 0 instead, (take value of arr[index] if it's valid, else its 0)
2) Work on thinking outside the box, like with the user's use of negative powers!
*/
