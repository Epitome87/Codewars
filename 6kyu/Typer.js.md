# [Typer.js](https://www.codewars.com/kata/541a077539c5ef3fd8001133)

## Description

**Type checking in JavaScript**

Sometimes it could be a good thing to check if an object is of a type T. Lets see this example:

```js
function doStuff(thing) {
  return thing.map(function (item) {
    return item * 2;
  });
}
```

If we call this function with an array, we get the expected result

```js
doStuff([1, 2, 3]); //Array [ 2, 4, 6 ]
```

But if someone calls doStuff (ruby do_stuff) with a different type of argument, it will throw an exception, because most likely the argument object won't have a method map defined on it.

```js
doStuff(3); //TypeError: thing.map is not a function
```

Apart from this, having methods like isArray (ruby Typer.is_array? obj), or isString (ruby Typer.is_string? obj) can rise readability when validating input arguments, and clears things up for fellow co-workers.

Your task will be to create a basic type-checker "framework/api" for JavaScript (or for Ruby). Let's call it typer.js (ruby Typer class). Your API must contain the following methods:

- isNumber (ruby is_number?)
- isString (ruby is_string?)
- isArray (ruby is_array?)
- isFunction (ruby do not implement this)
- isDate (ruby is_time?)
- isRegExp (ruby is_regexp?)
- isBoolean (ruby is_boolean?)
- isError (ruby is_exception?)
- isNull (ruby is_nil?)
- isUndefined (ruby is_nil?)

Create these utility methods for input validation. For example, if the argument is a number, then isNumber called with this argument should return true.

**Example**

```js
assert.equal(typer.isNumber(5), true);
assert.equal(typer.isString({}), false);
```

**Note**

If you are stuck, feel free to check how known utility libraries do the exact same thing. Check them on GitHub ;)

**Motivation**

Possibly after this kata the warriors who just started to learn JavaScript will learn that sometimes the conventional ways of type checking in JavaScript in not sufficient enough, since, for example, not only "simple" numbers are considered as numbers, but numbers created by Number constructors, etc.

This kata has also been translated to Ruby

## My Solution

**JavaScript**

```js
const typer = (function () {
  return {
    isNumber(input) {
      return typeof input.valueOf() === 'number' && !isNaN(input);
    },
    isString(input) {
      return typeof input === 'string' || input instanceof String;
    },
    isArray(input) {
      return Array.isArray(input);
    },
    isFunction(input) {
      return typeof input === 'function';
    },
    isDate(input) {
      return input instanceof Date;
    },
    isRegExp(input) {
      return input instanceof RegExp;
    },
    isBoolean(input) {
      return typeof input === 'boolean' || input instanceof Boolean;
    },
    isError(input) {
      return input instanceof Error;
    },
    isNull(input) {
      return input === null;
    },
    isUndefined(input) {
      return input === undefined;
    },
  };
})(null);
```

## Takeaways

1. The solution for isNumber should be memorized, as it is more obscure than the others.
2. For isNumber, you can also do:

   ```js
   isNumber(input) {
       return (input instanceof Number || typeof input === 'number') && !isNaN(input);
   }
   ```
