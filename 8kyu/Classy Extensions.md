# [Classy Extensions](https://www.codewars.com/kata/55a14aa4817efe41c20000bc)

## Description

Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing _extends_ keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.

**Task**

Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

## My Solution

**JavaScript**

```js
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}
```

```js
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} meows.`;
  }
}
```

## Takeaways:

1. Since the Cat constructor doesn't alter any logic from the Animal one, we don't really need to specify it.
