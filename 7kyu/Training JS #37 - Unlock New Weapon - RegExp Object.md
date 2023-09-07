# [Training JS #37: Unlock New Weapon - RegExp Object](https://www.codewars.com/kata/5735e39313c205fe39001173)

## Description

Coding in function countAnimals. function accept two parameters: animals, a string contains some animals; count, an array list of which animals we should count. The result should be a number array.

Examples

```js
countAnimals('dog,cat', ['dog', 'cat']); //=> [1,1]
countAnimals('dog,cat', ['dog', 'cat', 'pig']); //=> [1,1,0]
countAnimals('dog,dog,cat', ['dog', 'cat']); //=> [2,1]
countAnimals('dog,dog,cat', ['pig', 'cow']); //=> [0,0]
```

## My Solution

**JavaScript**

```js
const countAnimals = (animals, count) => count.map((el) => (animals.match(new RegExp(el, 'g')) || []).length);
```

### User Solution

**JavaScript**

```js
// Clever, but does not make use of the RegExp object
const countAnimals = (animals, count) => count.map((x) => animals.split(x).length - 1);
```
