# [The Once Rollable Dice](https://www.codewars.com/kata/54e4aa695c8a4c4cee0004d4)

## Description

In my simple RPG, every character will be created with the object-constructor: Character.

```js
var balthazaar = new Character('Balthazaar', 20);
// Balthazaar will be his name
// 20 will be his opness (as Over-Poweredness)
```

I did the best of my haxxing magic, but it seems I've got problems:

After creating him, my poor little hero's attacks seems to miss the magic of randomness. (The first fight with that stupid rat didn't go too well...)

```js
balthazaar.attack; // should RETURN 20 + ~~(Math.random()*20) + 1
// (maybe it should be a function)
// sadly, now it's always the same for me,
// somehow that d20 won't roll more than once
// (d20 is a 20 sided dice)
```

After defeating that rat, I want to be able to raise his "overpoweredness-factor", thus modifying his min/max attack capabilities.

```js
balthazaar.opness++;
balthazaar.attack; // should RETURN 21 + ~~(Math.random()*20) + 1
// tried cheating with it to beat that rat, but it doesn't work
```

Please help my Hero kill that rat, and become more Op!

Also, this is my first Kata, so I'll take any advice. Have Fun!

Starting (bugged) code:

```js
function Character(name, opness) {
  this.name = name;
  this.opness = 20;
  this.attack = opness + ~~(Math.random() * 20) + 1;
}
```

## My Solution

**JavaScript**

```js
class Character {
  constructor(name, opness) {
    this.name = name;
    this.opness = opness;
  }
  attack() {
    return this.opness + ~~(Math.random() * 20) + 1;
  }
}
```

### User Solution

**JavaScript**

```js
function Character(name, opness = 20) {
  this.name = name;
  this.opness = opness;
  this.attack = () => this.opness + ~~(Math.random() * 20) + 1;
}
```
