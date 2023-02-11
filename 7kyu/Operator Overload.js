/*
We have a class named 'Foo' with a 'val' attribute.

var foo = new Foo(2);     // foo.val = 2;
var boo = new Foo(3);    // boo.val = 3;
We want to be able to sum two Foo object using the '+' operator.

foo + boo // => must return 5
*/

// My solution:
const Foo = function (value) {
  this.val = value;
};

Foo.prototype.valueOf = function () {
  return this.val;
};

// Clever user solution:
var Foo = function (value) {
  return new Number(value);
};

// We can also just do:
const Foo = Number;

/* Takeaways:
1) Although operator overloading is technically not supported in JavaScript, we can overload the prototype.valueOf on the desired object, having it return the value we wish. Now that we have the proper value being returned, adding these two objects together will work like we want!
2) The clever user solution sets Foo as an alias to the Number constructor, achieving the same effect.
*/
