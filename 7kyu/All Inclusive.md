# [All Inclusive?](https://www.codewars.com/kata/5700c9acc1555755be00027e)

## Description

Input:

- a string `strng`
- an array of strings `arr`

Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

- a boolean true if all rotations of strng are included in arr
- false otherwise

**Examples:**

```
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
```

**Note:**

Though not correct in a mathematical sense

- we will consider that there are no rotations of strng == ""
- and for any array arr: contain_all_rots("", arr) --> true

Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

## My Solution

```js
const containAllRots = (str, arr) =>
  [...str].map((_, i) => str.slice(i) + str.slice(0, i)).every((v) => arr.includes(v));
```

**JavaScript**

```js
const containAllRots = (str, arr) => {
  for (let i = 0; i < str.length; i++) if (!arr.includes(str.slice(i) + str.slice(0, i))) return false;
  return true;
};
```

```js
const containAllRots = (str, arr) => {
  const rots = [];

  for (let i = 0; i < str.length; i++) {
    rots.push(str.slice(i) + str.slice(0, i));
  }

  for (let rot of rots) {
    if (!arr.includes(rot)) return false;
  }

  return true;
};
```

### User Solution

```js
function containAllRots(strng, arr) {
  return [...strng].map((_, i) => strng.substr(i) + strng.slice(0, i)).every((x) => arr.includes(x));
}
```
