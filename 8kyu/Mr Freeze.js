/*
There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
*/

// My solution:
Object.freeze(MrFreeze);

/* Takeaways:
1) I didn't know you could "freeze" an object! Try to remember this!
Object.freeze()
The Object.freeze() method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

Freezing an object is the highest integrity level that JavaScript provides.
*/
