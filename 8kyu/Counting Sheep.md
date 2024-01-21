# [Counting Sheep...](https://www.codewars.com/kata/54edbc7200b811e956000556)

## Description

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

```
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

## My Solution

**JavaScript**

```js
const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;
```

```js
const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((sheep) => sheep).length;
```

**Python**

```py
def count_sheeps(sheep):
  return len([s for s in sheep if s])
```

### User Solution

**Python**

```py
def count_sheeps(sheep):
    return sheep.count(True)
```
