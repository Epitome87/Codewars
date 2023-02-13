/*
When a function is called by itself it is bound to the global context; the this variable of the function will be bound to the global object.

When the getNameFunc function is called on the alpha object the value of the name variable outside of the object is returned: "The Window".

We do not want this, we want the value of the name property inside the alpha object to be returned.

Fix getNameFunc so the right value is returned.

For more information: Binding

name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return function() {
            return this.name;
        };
    }
};
*/

// My solution (further refactored);
name = 'The Window';

var alpha = {
  name: 'My Alpha',
  getNameFunc() {
    return () => this.name;
  },
};

// My solution (older-school approach):
name = 'The Window';

var alpha = {
  name: 'My Alpha',
  getNameFunc: function () {
    let that = this;
    return function () {
      return that.name;
    };
  },
};

// Top user solution (slightly less old-school than the solution directly above):
var name = 'The Window';

var alpha = {
  name: 'My Alpha',
  getNameFunc: function () {
    return function () {
      return this.name;
    }.bind(this);
  },
};

/* Takeaways:
1) To solve the Kata and use the appropriate 'this' context, we had to make the function returned by getNameFunc an anonymous function.
*/
