/*
As a part of this Kata, you need to create three functions that one needs to be able to call upon an array:

all

This function returns true only if the predicate supplied returns true for all the items in the array [1, 2, 3].all(isGreaterThanZero) => true [-1, 0, 2].all(isGreaterThanZero) => false

none

This function returns true only if the predicate supplied returns false for all the items in the array [-1, 2, 3].none(isLessThanZero) => false [-1, -2, -3].none(isGreaterThanZero) => true

any

This function returns true if at least one of the items in the array returns true for the predicate supplied [-1, 2, 3].any(isGreaterThanZero) => true [-1, -2, -3].any(isGreaterThanZero) => false

You do not need to worry about the data supplied, it will be an array at all times.
*/

// My solution:
Array.prototype.all = function (p) {
  for (const el of this) {
    if (!p(el)) return false;
  }
  return true;
};

Array.prototype.none = function (p) {
  for (const el of this) {
    if (p(el)) return false;
  }
  return true;
};

Array.prototype.any = function (p) {
  for (const el of this) {
    if (p(el)) return true;
  }
  return false;
};

// Clever user solution:
Array.prototype.all = function (p) {
  return this.filter(p).length == this.length;
};

Array.prototype.none = function (p) {
  return this.filter(p).length == 0;
};

Array.prototype.any = function (p) {
  return this.filter(p).length > 0;
};

// Another clever user solution:
Array.prototype.all = function (p) {
  return this.reduce((res, i) => res && p(i), true);
};

Array.prototype.none = function (p) {
  return this.reduce((res, i) => res && !p(i), true);
};

Array.prototype.any = function (p) {
  return this.reduce((res, i) => res || p(i), false);
};
