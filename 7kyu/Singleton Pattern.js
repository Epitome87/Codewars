/*
In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Create an Singleton pattern, so there is one object in system.

Example:

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1
*/

// Top user solution (though some recommend against it, as access to __instance is public):
var Singleton = function () {
  if (Singleton.__instance) {
    return Singleton.__instance;
  }

  Singleton.__instance = this;
};

// Another good user solution (using closures, so access to instance is private):
var Singleton = (function () {
  var instance = null;

  return function () {
    return instance || (instance = this);
  };
})();
