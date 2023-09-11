# [Class Conundrum - Bug Fixing #7](https://www.codewars.com/kata/55cd4ce59382498cbd000080)

## Description

Oh no! Timmy's List Class has broken! Can you help timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which timmy calls Lists).

When timmy calls the Count property of the list it still remains at 0 when adding items.

Also it fails when timmy trys to chain the adds e.g.

```js
myList.add(0).add(1);
```

## My Solution

**JavaScript**

```js
class List {
  constructor(type) {
    this.type = type;
    this.items = [];
    this.count = 0;
  }

  add(item) {
    if (typeof item != this.type) return `This item is not of type: ${this.type}`;

    this.items.push(item);
    this.count++;
    return this;
  }
}
```

### User Solution

**JavaScript**

```js
class List {
  constructor(type) {
    this.type = type;
    this.items = [];
  }

  get count() {
    return this.items.length;
  }

  add(item) {
    if (typeof item != this.type) return `This item is not of type: ${this.type}`;

    this.items.push(item);
    return this;
  }
}
```
