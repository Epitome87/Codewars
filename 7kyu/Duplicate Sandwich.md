# [Duplicate Sandwich](https://www.codewars.com/kata/5f8a15c06dbd530016be0c19)

## Description

**Task**

In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

Your task is to output a list of everything inbetween both occurrences of this element in the list.

**Examples:**

```js
[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"
```

**Notes**

- All elements will be the same datatype.
- All used elements will be primitive.

## My Solution

**JavaScript**

```js
const duplicateSandwich = (a) => {
  for (let i = 0; i < a.length; i++) {
    if ((start = a.indexOf(a[i])) !== (end = a.lastIndexOf(a[i]))) return a.slice(start + 1, end);
  }
};
```

### User Solution

**JavaScript**

```js
const duplicateSandwich = (list) => {
  let duplicated = [...list].find((a) => list.indexOf(a) !== list.lastIndexOf(a));
  return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated));
};
```
