# [Removing Elements](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2)

## Description

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

```
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
```

None of the arrays will be empty, so you don't have to worry about that!

## My Solution

**JavaScript**

```js
const removeEveryOther = (arr) => arr.filter((el, idx) => !(idx % 2));
```

**Python**

```py
def remove_every_other(my_list):
    return my_list[::2]
```
