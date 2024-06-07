# [Santa's Naughty List](https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef)

## Description

Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

## My Solution

**JavaScript**

```js
const findChildren = (santasList, children) =>
  [...new Set(santasList.filter((child) => children.includes(child)))].sort();
```

**Python**

```py
def find_children(santas_list, children):
    return sorted(set([child for child in children if child in santas_list]))
```

### User Solution

**Python**

```py
def find_children(santas_list, children):
    return sorted(set(santas_list) & set(children))
```

## Takeaways

1. Python supports set intersection with the `&` operator!
