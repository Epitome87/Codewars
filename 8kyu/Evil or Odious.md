# [Evil or Odious](https://www.codewars.com/kata/56fcfad9c7e1fa2472000034)

## Description

The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

## My Solution

**JavaScript**

```js
const evil = (n) =>
  n
    .toString(2)
    .split('')
    .filter((x) => x === '1').length % 2
    ? "It's Odious!"
    : "It's Evil!";
```

**Python**

```py
def evil(n):
    binary = str(bin(n))[2:]
    ones = 0
    for digit in binary:
        if int(digit) % 2: ones += 1
    return f"It's {'Odious' if ones % 2 else 'Evil'}!"
```

### User Solution

**JavaScript**

```js
function evil(n) {
  return n.toString(2).match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!";
}
```

```js
evil = (n) => ["It's Evil!", "It's Odious!"][(n.toString(2).split('1').length - 1) & 1];
```

**Python**

```py
def evil(n):
    return "It's Evil!" if  bin(n).count('1') % 2 == 0 else "It's Odious!"
```

```py
def evil(n):
    even_odd = sum(int(x) for x in bin(n)[2:])
    return "It's Evil!" if even_odd % 2 == 0 else "It's Odious!"
```

## Takeaways

1. The `count(value)` property can be used on Python lists (and strings) to count the number of times the specified value appears.
