# [SpeedCode #1 - Getters and Setters in Object Literals](https://www.codewars.com/kata/56fe9dbb69510b2ff8000fb3)

## Description

Define a variable `person` which stores an object literal. The object literal should have the following properties:

1. A `firstName` of "Jane"
2. A `lastName` of "Doe"

The object literal should then have a getter and setter called `fullName` which returns and parses the full name of the person respectively. A full name is defined as follows: If the first name is "Jane" and the last name is "Doe" then the full name is "Jane Doe" and vice versa. You may assume all full names are valid when parsing them.

## My Solution

**JavaScript**

```js
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },
};
```
