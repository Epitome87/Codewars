/*
In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
*/

// My solution:
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// Clever user solution:
function animal({ name, legs, color }) {
  return `This ${color} ${name} has ${legs} legs.`;
}

/* Takeaways:
1) Don't forget about object destructuring inside the function definition!
*/
