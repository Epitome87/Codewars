# [Shifty Closures](https://www.codewars.com/kata/514aa0dc21607ae236000017)

## Description

Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

Original code:

```js
var name = 'Abe';
var greet_abe = function () {
  return 'Hello, ' + name + '!';
};
name = 'Ben';
var greet_ben = function () {
  return 'Hello, ' + name + '!';
};
```

## My Solution

**JavaScript**

```js
// Doesn't actually use closures, though!
const greet_abe = () => 'Hello, Abe!';
const greet_ben = () => 'Hello, Ben!';
```

### User Solution

**JavaScript**

```js
var greet_abe = greet('Abe');
var greet_ben = greet('Ben');

function greet(name) {
  return function () {
    return 'Hello, ' + name + '!';
  };
}
```

## Takeaways

1. The issue with the original code is that 'Ben' is the `name` used in both greetings. This shows us that only the final value given to `name` is being used in the closures. Why is this, and why is this an issue? These are questions I don't quite understand, as forming a closure on a global variable is never something I wish to do to begin with! However, if I had to guess, by the time the functions form a closure over the `name` variable, the variable has already been set to 'Ben'.
