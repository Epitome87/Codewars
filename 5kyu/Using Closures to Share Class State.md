# [Using Closures to Share Class State](https://www.codewars.com/kata/53583765d5493bfdf5001b35)

## Description

In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

```js
garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight(); // now 20
```

But that's not all. Cats can change weight. Use `Object.defineProperty` to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:

```js
felix.weight = 25;
felix.weight; // 25
Cat.averageWeight(); // now 25
```

`Object.defineProperty` must be used to pass all tests. Storing a reference to all instances and recalculating the average weight each time is easier, but would prevent garbage collection from working properly if used in a production environment.

Finally, since average weight is an aggregate statistic it's important that we validate constructor arguments so that no cats are created without a specified weight; so, make sure to throw an error if both arguments are not received by the constructor.

**Summary of requirements:**

1. Cat constructor, requiring arguments for name and weight
2. Throw an error if `name` or `weight` not specified when invoking the constructor.
3. `Cat.averageWeight()` method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
4. Must use `Object.defineProperty`

## My Solution

**JavaScript**

```js
var Cat = (function () {
  const cats = { count: 0, totalWeight: 0, averageWeight: 0 };

  function Cat(name, weight) {
    if (!name || !weight) throw new Error('Name and weight must be provided!');
    this.name = name;
    cats.count++;

    Object.defineProperty(this, 'weight', {
      get: () => this._weight || 0,
      set: (val) => {
        cats.totalWeight = cats.totalWeight - this.weight + val;
        cats.averageWeight = cats.totalWeight / cats.count;
        return (this._weight = val);
      },
    });

    this.weight = weight;
  }

  Cat.averageWeight = () => cats.averageWeight;

  return Cat;
})();
```

### User Solution

**JavaScript**

```js
var Cat = (function (name, weight) {
  const cats = [];

  const constructor = function (name, weight) {
    if (!name || !weight) throw new Error('Invalid parameters!');

    Object.defineProperty(this, 'weight', {
      get: () => weight,
      set: (val) => (weight = val),
    });

    cats.push(this);
  };

  constructor.averageWeight = () => cats.reduce((acc, cat) => acc + cat.weight, 0) / cats.length;

  return constructor;
})();
```

## Takeaways:

1. Yuck! Class syntax makes this so much more trivial. If I am ever in a scenario where I need to create an object in this manner, I should not be in that scenario!
