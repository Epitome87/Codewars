# [Battle of the Characters (Medium)](https://www.codewars.com/kata/595e9f258b763bc2d2000032)

## Description

Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

**Rules**

Each character has its own power:

```
  A = 1, B = 2, ... Y = 25, Z = 26
  a = 0.5, b = 1, ... y = 12.5, z = 13
```

- Only alphabetical characters can and will participate in a battle.
- Only two groups to a fight.
- Group whose total power (a + B + c + ...) is bigger wins.
- If the powers are equal, it's a tie.

**Examples**

```js
"One", "Two"  -->  "Two"
"ONE", "NEO"  -->  "Tie!"
```

## My Solution

**JavaScaript**

```js
const battle = (x, y) => {
  const chars = ' abcdefghijklmnopqrstuvwxyz';
  const power = (str) =>
    str
      .match(/[a-z]/gi)
      .reduce(
        (acc, curr) =>
          acc + (curr === curr.toLowerCase() ? chars.indexOf(curr) * 0.5 : chars.indexOf(curr.toLowerCase())),
        0
      );
  const group1 = power(x);
  const group2 = power(y);
  return group1 > group2 ? x : group2 > group1 ? y : 'Tie!';
};
```
