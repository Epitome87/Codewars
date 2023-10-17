# [Array.prototype.size()](https://www.codewars.com/kata/58638bd2210be9a9690001f7)

## Description

**Implement Array.prototype.size() - without .length !**

Implement Array.prototype.size(), which should simply return the length of the array. But do it entirely without using Array.prototype.length!
Where .length is a property, .size() is a method.

**Rules**

Because it is quite impossible to disable [].length, and because filtering for "length" is an iffy proposition at best, THIS KATA WORKS ON THE HONOUR SYSTEM.
You may cheat. But you may have trouble sleeping. Or $DEITY may kill a puppy.

You need not support sparse arrays (but you may!). All testing will be done with dense arrays.
Values will not be undefined. You need only support actual, real arrays.

Your method needs to be read only. Arguments must be ignored. The this object must not be modified.

Be creative!

## My Solution

**JavaScript**

```js
Array.prototype.size = function () {
  return this.reduce((acc) => acc + 1, 0);
};
```

```js
Array.prototype.size = function () {
  let count = 0;
  for (let el of this) count++;
  return count;
};
```
