# [Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667)

## Description

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

    uniqueInOrder("AAAABBBCCDAABBB") == {'A', 'B', 'C', 'D', 'A', 'B'}
    uniqueInOrder("ABBCcAD")         == {'A', 'B', 'C', 'c', 'A', 'D'}
    uniqueInOrder([1,2,2,3,3])       == {1,2,3}


    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]

## My Solution

**JavaScript**

```js
const uniqueInOrder = (iterable) => [...iterable].filter((v, i) => v !== iterable[i - 1]);
```

```js
const uniqueInOrder = (iterable) => {
  const res = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) res.push(iterable[i]);
  }

  return res;
};
```

**Python**

```py
def unique_in_order(iterable):
    return [x for i, x in enumerate(iterable) if i == 0 or x != iterable[i - 1]]
```

```py
def unique_in_order(sequence):
    res = []

    for i in range(len(sequence)):
        if i == 0 or not sequence[i] == sequence[i - 1]:
            res.append(sequence[i])

    return res
```
