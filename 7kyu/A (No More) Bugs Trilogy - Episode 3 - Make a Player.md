# [A (No More) Bugs Trilogy: Episode 3 - Make a Player](https://www.codewars.com/kata/5630c850ed4343c1d0000083)

## Description

Pac succesfully passed the first & second test.
He just received the last message from the Academy,

```
This is your last test, if you pass, your application will be accepted. You have 45 minutes.

Good Luck
```

Pac has to create a Football Player object with the following attributes:

```
name      -> (string)
position  -> (string)
age       -> (int)
dribbling -> (int)
pass      -> (int)
shoot     -> (int)
```

**Example**

```
myPlayer = new Player("Dumbo", "Kata Coder", 1,2,3,4);

myPlayer.name => "Dumbo"
myPlayer.position => "Kata Coder"
myPlayer.age => 1
myPlayer.dribbling => 2
myPlayer.pass => 3
myPlayer.shoot => 4
```

## My Solution

**JavaScript**

```js
class Player {
  constructor(name, position, age, dribbling, pass, shoot) {
    Object.assign(this, { name, position, age, dribbling, pass, shoot });
  }
}
```
