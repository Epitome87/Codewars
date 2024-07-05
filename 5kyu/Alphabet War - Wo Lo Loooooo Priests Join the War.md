# [Alphabet War - Wo Lo Loooooo Priests Join the War](https://www.codewars.com/kata/59473c0a952ac9b463000064)

## Description

**Introduction**

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters have discovered a new unit - a priest with Wo lo looooooo power.

**Task**

Write a function that accepts `fight` string consists of only small letters and return who wins the fight. When the left side wins return `Left side wins!`, when the right side wins return `Right side wins!`, in other case return `Let's fight again!`.

The left side letters and their power:

```
 w - 4
 p - 3
 b - 2
 s - 1
 t - 0 (but it's priest with Wo lo loooooooo power)
```

The right side letters and their power:

```
 m - 4
 q - 3
 d - 2
 z - 1
 j - 0 (but it's priest with Wo lo loooooooo power)
```

The other letters don't have power and are only victims.
The priest units `t` and `j` change the adjacent letters from hostile letters to friendly letters with the same power.

```
mtq => wtp
wjs => mjz
```

A letter with adjacent letters `j` and `t` is not converted i.e.:

```
tmj => tmj
jzt => jzt
```

The priests (`j` and `t`) do not convert the other priests ( `jt` => `jt` ).

**Example**

```js
alphabetWar('z'); //=>  "z"  => "Right side wins!"
alphabetWar('tz'); //=>  "ts" => "Left side wins!"
alphabetWar('jz'); //=>  "jz" => "Right side wins!"
alphabetWar('zt'); //=>  "st" => "Left side wins!"
alphabetWar('azt'); //=> "ast" => "Left side wins!"
alphabetWar('tzj'); //=> "tzj" => "Right side wins!"
```

## My Solution

**JavaScript**

```js
const alphabetWar = (fight) => {
  const map = { w: -4, p: -3, b: -2, s: -1, t: -0, m: 4, q: 3, d: 2, z: 1, j: 0 };
  const powers = [...fight].map((v) => ('tj'.includes(v) ? v : map[v] ?? 0));

  for (let i = 0; i < powers.length; i++) {
    if (/j|t/.test(powers[i])) makeHostile(i, powers);
  }

  const power = [...powers].reduce((acc, cur) => acc + ('tj'.includes(cur) ? 0 : cur), 0);
  return power < 0 ? `Left side wins!` : power > 0 ? `Right side wins!` : `Let's fight again!`;
};

const makeHostile = (i, powers) => {
  if (powers[i] === 't') {
    if (powers[i - 1] > 0 && powers[i - 2] !== 'j') powers[i - 1] *= -1;
    if (powers[i + 1] > 0 && powers[i + 2] !== 'j') powers[i + 1] *= -1;
  } else if (powers[i] === 'j') {
    if (powers[i - 1] < 0 && powers[i - 2] !== 't') powers[i - 1] *= -1;
    if (powers[i + 1] < 0 && powers[i + 2] !== 't') powers[i + 1] *= -1;
  }
};
```
