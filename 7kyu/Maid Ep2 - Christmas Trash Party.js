/*
His Royal Highness Prince of Edinburgh cares a lot about the ecology and propagates waste sorting. Once per year, He organizes the Christmas Trash Party, where His employees sort the garbage that the Prince has been thrown during the year. Obviously, you want to participate in this High day.

Task
You will receive trash1 and trash2, that might be the next values:

[], false, '', new Array(), null, NaN, undefined, 0, -0, 0n, -0n, '0'

You have to return a boolean if they are strictly equal.

However
The Prince says when He was young, there weren't softies who were afraid to get their hands dirty, so He doesn't let His employees use gloves for work (triple equals === and strict inequality !== are not allowed).

These links might help:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
https://github.com/denysdovhan/wtfjs
*/

// My eh solution:
function compareTrash(trash1, trash2) {
  if (
    Number.isInteger(trash1) &&
    !trash1 &&
    Number.isInteger(trash2) &&
    !trash2
  )
    return true;
  if (
    Number.isInteger(trash2) &&
    !trash2 &&
    Number.isInteger(trash1) &&
    !trash1
  )
    return true;
  if (Number.isNaN(trash1) || Number.isNaN(trash2)) return false;
  return Object.is(trash1, trash2);
}

// Top user solution:
function compareTrash(trash1, trash2) {
  return trash1 == trash2 && typeof trash1 == typeof trash2;
}

// Clever user solution:
function compareTrash(trash1, trash2) {
  if (Number.isNaN(trash1) && Number.isNaN(trash2)) return false;
  return [trash1].includes(trash2);
}

/* Takeaways:
1) Always read the instructions clearly! I thought you couldn't use '===' OR '==',
so my solution avoids the obvious route of using typeof and ==
2) Lots of interesting quirks between ==, ===, and Object.is().
3) Also several interesting quirks between Number.isNaN() and isNan(), namely
Number.NaN is only true if the expression evaluates to NaN. So inputs of NaN, 0/0, etc.
isNaN() considers inputs such as characters and undefined as true.
4) [trash1].includes(trash2) works for all desires outcomes except for when trash1 or trash2
is NaN (it will return true, instead of the false we want).
*/
