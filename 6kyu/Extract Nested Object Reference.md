# [Extract Nested Object Reference](https://www.codewars.com/kata/527a6e602a7db3456e000a2b)

## Description

You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

```js
var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
```

## My Solution

**JavaScript**

```js
Object.prototype.hash = function (string) {
  return string.split('.').reduce((acc, cur) => (acc ? acc[cur] : acc), this);
};
```

```js
Object.prototype.hash = function (string) {
  const keys = string.split('.');
  let result = { ...this };

  for (let key of keys) {
    if (key in result) result = result[key];
    else return;
  }

  return result;
};
```
