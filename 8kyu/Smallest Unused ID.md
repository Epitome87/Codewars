# [Smallest Unused ID](https://www.codewars.com/kata/55eea63119278d571d00006a)

## Description

Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!

## My Solution

**JavaScript**

```js
const nextId = (ids) => {
  for (let i = 0; i <= ids.length; i++) {
    if (!ids.includes(i)) return i;
  }
};
```

**Python**

```py
def next_id(arr):
    if not arr:
        return 0
    for i in range(len(arr) + 1):
        if i not in arr:
            return i
```

### User Solution

**JavaScript**

```js
function nextId(ids) {
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}
```

**Python**

```py
def next_id(a):
    i = 0
    set_a = set(a)
    while i in set_a:
        i += 1
    return i
```
