# [Training JS #5: Basic Data Types - Object](https://www.codewars.com/kata/571f1eb77e8954a812000837)

## Description

Given a function `animal`, accept 1 parameter: `obj` like this:

```js
{ name:"dog", legs: 4, color: "white" }
```

and return a string like this:

```
"This white dog has 4 legs."
```

## My Solution

**JavaScript**

```js
const animal = ({ name, legs, color }) => `This ${color} ${name} has ${legs} legs.`;
```

```js
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
```
