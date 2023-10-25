# [](https://www.codewars.com/kata/)

## Description

## My Solution

**JavaScript**

```js
const sortAnimal = (animals) => {
  return [...animals].sort((a, b) => {
    const legDelta = a.numberOfLegs - b.numberOfLegs;
    return legDelta ? legDelta : a.name.localeCompare(b.name);
  });
};
```

### User Solution

**JavaScript**

```js

```
