# [Alphabet War](https://www.codewars.com/kata/59377c53e66267c8f6000027)

## Description

**Introduction**

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

**Task**

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

```
 w - 4
 p - 3
 b - 2
 s - 1
```

The right side letters and their power:

```
 m - 4
 q - 3
 d - 2
 z - 1
```

The other letters don't have power and are only victims.

**Example**

```js
alphabetWar('z'); //=> Right side wins!
alphabetWar('zdqmwpbs'); //=> Let's fight again!
alphabetWar('zzzzs'); //=> Right side wins!
alphabetWar('wwwwwwz'); //=> Left side wins!
```

```js
const alphabetWar = (fight) => {
  const alphabet = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  const result = [...fight].reduce((acc, cur) => acc + (alphabet[cur] || 0), 0);
  return result < 0 ? 'Left side wins!' : result > 0 ? 'Right side wins!' : "Let's fight again!";
};
```

```js
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
```

**Python**

```py
def alphabet_war(fight):
    alphabet = { "w": -4, "p": -3, "b": -2, "s": -1, "m": 4, "q": 3, "d": 2, "z": 1 }
    result = sum([alphabet.get(c, 0) for c in fight])
    return "Left side wins!" if result < 0 else "Right side wins!" if result > 0 else "Let's fight again!";
```

### User Solution

**Python**

```py
def alphabet_war(fight):
    result = sum("zdqm".find(c) - "sbpw".find(c) for c in fight)
    return "{} side wins!".format("Left" if result < 0 else "Right") if result else "Let's fight again!"
```
