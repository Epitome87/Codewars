# [Filter out the Geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7)

## Descriptioin

Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

```
  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
```

For example, if this array were passed as an argument:

```
 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
```

Your function would return the following array:

```
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
```

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

## My Solution

**JavaScript**

```js
const gooseFilter = (birds) => birds.filter((bird) => !/African|Roman Tufted|Toulouse|Pilgrim|Steinbacher/.test(bird));
```

```js
const gooseFilter = (birds) => {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  return birds.filter((bird) => !geese.includes(bird));
};
```

**Python**

```py
def goose_filter(birds):
    return [bird for bird in birds if bird not in ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]]
```
