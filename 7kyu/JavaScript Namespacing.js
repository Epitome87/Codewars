/*
Define a class named MyClass inside a namespace MyNamespace. The class constructor should accept a single string argument. It should also have a function named sayHello that returns the string passed into the constructor.

Example:

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello(); // phrase should be 'Hello!'
The interesting part is that MyClass should only be accessible via the namespace and should not define any extra global variables. Code should not redefine an existing namespace, but should also function if the namespace is not previously defined.
*/

// My solution:
MyNamespace.MyClass = class {
  constructor(text) {
    this.text = text;
  }
  sayHello() {
    return this.text;
  }
};

// Top user solution:
var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = function (phrase) {
  this.phrase = phrase;
};

MyNamespace.MyClass.prototype.sayHello = function () {
  return this.phrase;
};

/* Takeaways:
1) Although the concept of a "namespace" isn't really a thing in JavaScript, we see here how we could implement the concept. Essentially, we're just creating an object (in this case, MyNamespace was created for us already), and adding a property to it. This property just happens to be a class.
*/
