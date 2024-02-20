# [Lazily Executing a Funciton](https://www.codewars.com/kata/5458d4d2cbae2a9438000389)

## Description

Deferring a function execution can sometimes save a lot of execution time in our programs by postponing the execution to the latest possible instant of time, when we're sure that the time spent while executing it is worth it.

Write a method `make_lazy` that takes in a function (symbol for Ruby) and the arguments to the function and returns another function (lambda for Ruby) which when invoked, returns the result of the original function invoked with the supplied arguments.

For example:

Given a function `add`

```js
function add(a, b) {
  return a + b;
}
```

One could make it lazy as:

```js
var lazy_value = make_lazy(add, 2, 3);
```

The expression does not get evaluated at the moment, but only when you invoke lazy_value as:

```js
lazy_value() => 5
```

The above invocation then performs the sum.

Please note: The functions that are passed to `make_lazy` may take one or more arguments and the number of arguments is not fixed.

## My Solution

**JavaScript**

```js
const makeLazy =
  (fn, ...args) =>
  () =>
    fn(...args);
```

```js
const makeLazy = (fn, ...args) => {
  return function () {
    return fn(...args);
  };
};
```

### User Solution

**JavaScript**

```js
var make_lazy = function (fn) {
  return fn.bind.apply(fn, arguments);
};
```
