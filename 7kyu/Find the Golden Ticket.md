# [Find the Golden Ticket!](https://www.codewars.com/kata/59828f1954419acdff00002e)

## Description

Willy Wonka has put golden tickets into the candy bars around the world! Do you have one of those lucky golden tickets?

Create a function that will search a box of candy bars for the golden ticket. The box is a 2D array that contains `false` if there is no ticket, and a `true` if there is one.

```js
//Example of a box of candy bars:
[[false], [false], [false], [true], [false]];
```

The function should output the index of the candy bar with the golden ticket. IF there is NO golden ticket in the box, the function should output "There is no golden ticket!"

Examples:

```js
finder([[false], [false], [false], [true], [false]]); // => 3
finder([[true], [false], [false], [false]]); // => 0
finder([[false], [false], [false], [false], [false]]); // => "There is no golden ticket!"
```

## My Solution

**JavaScript**

```js
const finder = (box) => box.reduce((acc, cur, i) => (cur[0] ? i : acc), 'There is no golden ticket!');
```

```js
const finder = (box) => {
  const goldenTicketIndex = box.findIndex((v) => v.toString() === 'true');
  if (goldenTicketIndex >= 0) return goldenTicketIndex;
  return 'There is no golden ticket!';
};
```
