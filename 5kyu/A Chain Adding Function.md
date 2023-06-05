# [A Chain Adding Function](https://www.codewars.com/kata/539a0e4d85e3425cb0000a88)

## Description

We want to create a function that will add numbers together when called in succession.

```js
add(1)(2); // == 3
```

We also want to be able to continue to add numbers to our chain.

```js
add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
```

and so on.

A single call should be equal to the number passed in.

```js
add(1); // == 1
```

We should be able to store the returned values and reuse them.

```js
var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
We can assume any number being passed in will be valid whole number.
```

### My Solution

**JavaScript**

```js
// My (researched) solution:
const add = (x) => {
  const sum = (y) => add(x + y);
  sum.valueOf = () => x;

  return sum;
};
```

### User Solution

**JavaScript**

```js
// Top user solution:
function add(n) {
  var fn = function (x) {
    return add(n + x);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
}
```

```js
// Another user solution:
const add = (n) => Object.assign((i) => add(i + n), { valueOf: () => n });
```

### Takeaways

1. Study advanced functional programming concepts like Currying!!!
