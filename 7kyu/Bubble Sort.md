# [Bubble Sort](https://www.codewars.com/kata/57403b5ad67e87b5e7000d1d)

## Description

Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. Your task is to implement a Bubble sort (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) and return a list of snapshots after each change of the initial list.

e.g.

If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and after that it adds [1,2,3,4] to the result, which is a list of snapshots.

```
[1,2,4,3] should return [ [1,2,3,4] ]
[2,1,4,3] should return [ [1,2,4,3], [1,2,3,4] ]
[1,2,3,4] should return []
```

## My Solution

**JavaScript**

```js
const bubble = (arr) => {
  const result = [];
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        result.push([...arr]);
      }
    }
  } while (swapped);

  return result;
};
```

**Python**

```py
def bubble(lst):
    result = []
    swapped = False

    while True:
        swapped = False
        for i in range(len(lst) - 1):
            if lst[i] > lst[i + 1]:
                lst[i], lst[i + 1] = lst[i + 1], lst[i]
                swapped = True
                result.append([x for x in lst])
        if not swapped:
            break

    return result
```

### User Solution

```py
def bubble(l):
    arr = []
    for j in range(len(l)-1,0,-1):
        for i in range(j):
            if l[i]>l[i+1]:
                temp = l[i]
                l[i] = l[i+1]
                l[i+1] = temp
                arr.append(l[:])
    return arr
```

```py
def bubble(l):
    snapshots = []
    l_length = len(l)

    for i in range(l_length - 1):
        is_swapped = False
        for j in range(l_length - i - 1):
            if l[j] > l[j + 1]:
                l[j], l[j + 1] = l[j + 1], l[j]
                snapshots.append(l[:])
                is_swapped = True

        if not is_swapped:
            return snapshots

    return snapshots
```
