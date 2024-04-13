# [Something's Fishy...](https://www.codewars.com/kata/54f5c1b000ecc46de6000e4c)

## Description

This kata has one simple requirement, return `3` as a sum of three variables containing values as `1`, but in a twisted way...

This initial code looks correct but doesn't work. Your job is to find the issue and fix it.

Note: You are neither allowed to change the places where those variables are initialized, nor can you change the values to anything other than `1`, and you shouldn't touch the return statement either.

Original (bugged) code:

```js
function isTotal3() {
  var simpleVariable = 1;

  for (var index = 0; index < 1; index++) var variableInLoop = 1;

  (function defineAVariable() {
    var variableInFunction = 1;
  })();

  var result = simpleVariable + variableInLoop + variableInFunction;

  return result;
}
```

## My Solution

**JavaScript**

```js
function isTotal3() {
  var simpleVariable = 1;

  for (var index = 0; index < 1; index++) var variableInLoop = 1;

  (function defineAVariable() {
    variableInFunction = 1;
  })();

  var result = simpleVariable + variableInLoop + variableInFunction;

  return result;
}
```

## Takeaways

1. By removing the `var` in front of `variableInFunction`, we have allowed it to leak out into the global context. Thus, rather than a reference error when accessing the variable later in `result`, we get the correct value.

The following is a stackoverflow post explaining the concept:

```
function foo() {
    var variable1, variable2;

    variable1 = 5;
    varaible2 = 6;
    return variable1 + variable2;
}
Seems simple enough, but it returns NaN, not 11, because of the typo on the varaible2 = 6; line. And it creates a global variable with the typo'd name:

Show code snippet

This is because the function assigns to varaible2 (note the typo), but varaible2 isn't declared anywhere. Through the mechanics of the scope chain in JavaScript, this ends up being an implicit assignment to a (new) property on the global object (which you can access as window on browsers, or globalThis in all modern environments [including modern browsers]).

That's just a "feature" of loose-mode JavaScript, assigning to a completely undeclared identifier isn't an error; instead, it creates a property on the global object, and properties on the global object are global variables. (Up through ES5, all globals were properties of the global object. As of ES2015, though, a new kind of global was added that isn't a property of the global object. Global-scope let, const, and class create the new kind of global.)

My example is a typo, but of course, you could do it on purpose if you wanted. But I'd strongly advise not doing so. Instead, I recommend always using strict mode, either directly or by using ECMAScript modules (ESM, JavaScript's own module system added in ES2015), which are strict by default. Strict mode makes assigning to an undeclared identifier an error rather than silently creating a global. If we'd been using strict mode, the problem with the foo function above would have been much more obvious and easier to diagnose:
```
