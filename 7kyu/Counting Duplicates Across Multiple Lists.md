# [Counting Duplicates Across Multiple Lists](https://www.codewars.com/kata/6113c2dc3069b1001b8fdd05)

## Description

Given multiple lists (`name`, `age`, `height`), each of size `n` :

An entry contains one name, one age and one height. The attributes corresponding to each entry are determined by the index of each list. For example, the first entry is comprised of the first elements of each list, the second entry is comprised of the second elements of each list, etc.

A duplicate entry is one in which the name, age and height are ALL the same.

Write a function which takes in the attributes for each entry and returns an integer for the number of duplicated entries. For a set of duplicates, the original entry should not be counted as a duplicate.

## My Solution

**JavaScript**

```js
const countDuplicates = (name, age, height) =>
  name.length - new Set(name.map((n, i) => [n, age[i], height[i]].join())).size;
```

```js
const countDuplicates = (name, age, height) => {
  let numDuplicates = 0;
  const entrySet = new Set();

  for (let i = 0; i < name.length; ++i) {
    const entry = [name[i], age[i], height[i]].join(',');
    if (entrySet.has(entry)) numDuplicates++;
    else entrySet.add(entry);
  }

  return numDuplicates;
};
```

**Python**

```py
def count_duplicates(name,age,height):
    return len(name) - len(set(zip(name, age, height)))
```

```py
def count_duplicates(name,age,height):
    return len(name) - len(set(name[i] + str(age[i]) + str(height[i]) for i in range(len(name))))
```
