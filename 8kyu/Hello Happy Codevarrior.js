/*
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..

Original code:
function Warrior(n){
  name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}
*/

// My solution:
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

/* Takeaways:
1) The error lied in the fact that we were not using let, const, or var when declaring the name variable.
*/