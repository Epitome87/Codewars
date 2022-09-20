/*
 */

// My solution:
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return { firstName: this.firstName, lastName: this.lastName, name: this.firstName + ' ' + this.lastName };
}

// Top user solution:
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + ' ' + last;
}

/* Takeaways:
1) Was not sure the intention of the Kata, as I am not accustomed to seeing a value returned in a Constructor Function.
*/
