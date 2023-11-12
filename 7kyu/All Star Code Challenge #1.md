# [All Star Code Challenge #1](https://www.codewars.com/kata/5863f97fb3a675d9a700003f)

## Description

Write a function, called `sumPPG`, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG

Examples:

```js
function NBAplayer(name, team, ppg) {
  this.name = name;
  this.team = team;
  this.ppg = ppg;
}

var iverson = new NBAplayer('Iverson', '76ers', 11.2);
var jordan = new NBAplaer('Jordan', 'bulls', 20.2);
sumPPG(iverson, jordan); // => 31.4
```

## My Solution

**JavaScript**

```js
// Allows for the function to work with more than just two players
const sumPPG = (...players) => players.reduce((acc, cur) => acc + cur.ppg, 0);
```
