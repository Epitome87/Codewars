# [Make Class](https://www.codewars.com/kata/5d774cfde98179002a7cb3c8)

## Description

I don't like writing classes like this:

```js
function Animal(name, species, age, health, weight, color) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.color = color;
}
```

Give me the power to create a similar class like this:

```js
const Animal = makeClass('name', 'species', 'age', 'health', 'weight', 'color');
```

## User Solution

**JavaScript**

```js
function makeClass(...props) {
  return function (...args) {
    props.forEach((prop, i) => (this[prop] = args[i]));
  };
}
```

### User Solution

**JavaScript**

```js
function makeClass(...properties) {
  return class {
    constructor(...props) {
      properties.forEach((prop, index) => {
        this[prop] = props[index];
      });
    }
  };
}
```
