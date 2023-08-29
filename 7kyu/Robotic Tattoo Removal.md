# [Robotic Tattoo Removal](https://www.codewars.com/kata/57658f3dedc6f7a751000e7b)

## Description

Sometimes people get tattoos, sometimes they wish they hadn't, sometimes the tattoos must go. Lets create a robot that can remove tattoos.

Your robot function accepts one array argument called skinScan. I have supplied an example array below.

```js
[
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', 'X', ' ', ' ', ' ', 'X', 'X', ' ', ' '],
  [' ', 'X', ' ', ' ', 'X', ' ', 'X', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
  [' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];
```

Your task is to create a function for the robot function that will zap away the Xs and replace them with \*s. Any array values that are not Xs must be left alone. Below is what skinScan should look like after the tattoo has been removed.

```js
[
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', '*', ' ', ' ', ' ', '*', '*', ' ', ' '],
  [' ', '*', ' ', ' ', '*', ' ', '*', ' ', ' ', '*', ' '],
  [' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' '],
  [' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' '],
  [' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' '],
  [' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' '],
  [' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' '],
  [' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];
```

## My Solution

**JavaScript**

```js
const robot = (skinCare) => skinCare.map((row) => row.map((col) => (col === 'X' ? '*' : col)));
```
