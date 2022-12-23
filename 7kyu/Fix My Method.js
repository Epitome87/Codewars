/*
I am kind of new to coding so I'm not sure what is wrong with my code.

Property objMethod should be called by myFunction.

Can you fix the syntax so myFunction will be working again? Please check things like braces, commas, and letter case.

IMPORTANT: Returning just "string" is insufficient. We are required to use Object Literal Notation.

Original Code:
function myFunction() {
  var MyObject = {
    objProperty: "string"
    objMethod: function() {
      return myObject.objProperty;
		}
  }
  
  return myObject.Objmethod();
};
*/

// My original solution:
function myFunction() {
  const myObject = {
    objProperty: 'string',
    objMethod: function () {
      return myObject.objProperty;
    },
  };
  return myObject;
}

// My refactored solution:
const myFunction = () => ({
  objProperty: 'string',
  objMethod: function () {
    return this.objProperty;
  },
});

// My refactored solution (using ES6 shorthand):
const myFunction = () => ({
  objProperty: 'string',
  objMethod() {
    return this.objProperty;
  },
});
