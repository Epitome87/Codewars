# [Good Luck Coop (Updated)](https://www.codewars.com/kata/5b571f7bbdd074fea100017e)

## Description

Your aim in this puzzle will be to help agent Cooper to avoid the evil powers.

How can you help?

You, as agent Gordon, can see the board and you have directions from FBI and directions from FBI are always safest. What you can do is to check the board for agent Coop and text him the only safe route he has to take.

\*\* Cooper can take only horizontal or vertical gate.

\*\* Gates numbering starts from one.

let's look at the actual example:

If your directions from FBI is "abcdd" and your board is:

```
  "abcdd",            a b c d d
  "12345",            1 2 3 4 5
  "ratca",     =>     r a t c a
  "pimmu",            p i m m u
  "rest1"             r e s t 1
```

it's is obvious that you have to send a massage to Coop that says: "Horizontal 1", so he can take the safe route.
Let's look at another example: if we have the same board and your direction is "c3tms" your message has to be "Vertical 3!" because it matches 3rd vertical line; If the directions are too short or too long or don't match any horizontal or vertical line you have to text agent Cooper: "Coop, it's too risky!".

\*\* Board is always square and length of the direction might not match the length of the square

\*\* Password and board subarrays are always provided as lowerCase strings

\*\* Function has to return a string

P.S If you wonder about the amazingness of Gordon and Cooper you have to watch Twin Peaks and enjoy at your fullest.

## My Solution

**JavaScript**

```js
const findSafeRoute = (board, directions) => {
  if (board.includes(directions)) return `Horizontal ${board.findIndex((v) => v === directions) + 1}`;

  for (let col = 0; col < board.length; col++)
    if (board.map((row) => row[col]).join('') === directions) return `Vertical ${col + 1}`;

  return "Coop, it's too risky!";
};
```
