/*
Write a function evilTwin(obj) which returns a new object with all the same properties as obj, and with an additional property hasGoatee set to true.

For example:

var orig = {x: 5};
console.log(orig.x) // -> 5
console.log(orig.hasGoatee) // -> undefined
var twin = evilTwin(orig);
console.log(twin.x) // -> 5
console.log(twin.hasGoatee) // -> true
If the original object is modified, its twin should reflect the changes so:

orig.z = 12
console.log(twin.z) // -> 12
*/

// My (researched) solution:
const evilTwin = (obj) => {
  const twin = Object.create(obj);
  twin.hasGoatee = true;
  return twin;
};

// Top user solution:
function evilTwin(obj) {
  return Object.create(obj, {
    hasGoatee: {
      value: true,
    },
  });
}

// Another top user solution:
function evilTwin(obj) {
  return Object.defineProperty(Object.create(obj), 'hasGoatee', { value: true });
}

// Another interesting user solution:
function evilTwin(obj) {
  const twinObj = {
    hasGoatee: true,
  };

  Object.setPrototypeOf(twinObj, obj);

  return twinObj;
}

// And yet another:
function evilTwin(obj) {
  var newObj = {};
  newObj.hasGoatee = true;
  newObj.__proto__ = obj;
  return newObj;
}

/* Takeaways:
1) This may be very important and useful to know!
By using Object.create(obj), we are creating a new object based on the shape of the passed object. Most interesting,
the original object can be changed without modifying the newly created one, but the newly created object being modified will also modify the original?!
*/
