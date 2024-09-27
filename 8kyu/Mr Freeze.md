# [Mr Freeze](https://www.codewars.com/kata/514a3996d22ce03198000003)

## Description

There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

## My Solution

**JavaScript**

```js
Object.freeze(MrFreeze);
```

## Takeaways

1. The `Object.freeze()` method _freezes_ an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in. Freezing an object is the highest integrity level that JavaScript provides.
