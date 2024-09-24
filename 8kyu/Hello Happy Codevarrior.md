# [Hello Happy Codevarrior](https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed)

## Description

VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

```js
var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
```

Original code:

```js
function Warrior(n) {
  name = n;
  this.name = function (n) {
    if (n) name = n;
    return name;
  };
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.name();
};
```

## My Solution

**JavaScript**

```js
function Warrior(n) {
  let name = n;
  this.name = function (n) {
    if (n) name = n;
    return name;
  };
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.name();
};
```
