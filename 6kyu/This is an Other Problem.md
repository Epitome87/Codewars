# ["This" is an Other Problem](https://www.codewars.com/kata/547f1a8d4a437abdf800055c)

## Description

After you've solved @priyankaherur's problem (http://www.codewars.com/kata/this-is-a-problem/javascript) you may try to solve this other one.

**The problem:**

Having created a function `NamedOne` which takes first & last names as parameters and returns an object with `firstName`, `lastName` and `fullName` (= `firstName` + a space + `lastName`) properties which should be all accessible, we discovered that "accessible" also means "mutable".

If, for example, we've got a "NamedOne" like this :

```js
var namedOne = new NamedOne('Naomi', 'Wang');
namedOne.firstName; // -> "Naomi"
namedOne.lastName; // -> "Wang"
namedOne.fullName; // -> "Naomi Wang"
```

...properties may be changed :

```js
namedOne.firstName = 'John';
namedOne.firstName; // -> "John"
namedOne.lastName = 'Doe';
namedOne.lastName; // -> "Doe"
```

...but all properties are not updated !

```js
namedOne.fullName; // -> "Naomi Wang"
//-- Oh no ! we want fullName == "John Doe" now !
```

**Your mission:**
So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

- If `.firstName` or `.lastName` are changed, then `.fullName` should also be changed
- If `.fullName` is changed, then `.firstName` and `.lastName` should also be changed.

Note : "input format" to `.fullName` will be `firstName + space+ lastName`. If given fullName isn't valid then no property is changed.

**Examples:**

```js
var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
Can you change our function to create such a NamedOne object ?
```

(Hint: in this kata you'll try to define properties of an object)

## My Solution

**JavaScript**

```js
class NamedOne {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(name) {
    const [first, last] = name.split(' ');
    if (!first || !last) return;
    this.first = first;
    this.last = last;
  }
}
```

### User Solution

**JavaScript**

```js
class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    if (fullName.match(/\w+ \w+/)) [this.firstName, this.lastName] = fullName.split(' ');
  }
}
```
