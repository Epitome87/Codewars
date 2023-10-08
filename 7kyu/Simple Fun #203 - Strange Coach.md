# [Simple Fun #203: Strange Coach](https://www.codewars.com/kata/58fd91af13b0012e8e000010)

## Description

Mirko has been moving up in the world of basketball. He started as a mere spectator, but has already reached the coveted position of the national team coach!

Mirko is now facing a difficult task: selecting five primary players for the upcoming match against Tajikistan. Since Mirko is incredibly lazy, he doesn't bother remembering players' names, let alone their actual skills. That's why he has settled on selecting five players who share the same first letter of their surnames, so that he can remember them easier. If there are no five players sharing the first letter of their surnames, Mirko will simply forfeit the game!

Your task is to find the first letters Mirko's players' surnames can begin with(In alphabetical order), or return "forfeit" if Mirko can't gather a team.

**Input/Output**

- [input] string array players

Array of players' surnames, consisting only of lowercase English letters.

- [output] a string

A **sorted** string of possible first letters, or "forfeit" if it's impossible to gather a team.

**Example**

For players = ["michael","jordan","lebron","james","kobe","bryant"], the output should be "forfeit".

For

```
players = ["babic","keksic","boric","bukic",
             "sarmic","balic","kruzic","hrenovkic",
             "beslic","boksic","krafnic","pecivic",
             "klavirkovic","kukumaric","sunkic","kolacic",
             "kovacic","prijestolonasljednikovic"]
```

the output should be "bk".

## My Solution

**JavaScript**

```js
const strangeCoach = (players) => {
  const frequency = players.reduce((acc, cur) => ({ ...acc, [cur[0]]: acc[cur[0]] + 1 || 1 }), {});
  const possibilities = Object.keys(frequency).filter((key) => frequency[key] >= 5);
  return possibilities.length >= 1 ? possibilities.sort().join('') : 'forfeit';
};
```

### User Solution

**JavaScript**

```js
let strangeCoach = (arr) =>
  arr.map((i) => i[0]).sort``.join``.replace(/(.)\1*/g, (i) => (i.length < 5 ? '' : i[0])) || 'forfeit';
```
