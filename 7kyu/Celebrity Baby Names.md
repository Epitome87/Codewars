# [Celebrity Baby Names](https://www.codewars.com/kata/577d5ce442a8d81e790002b2)

## Description

Celebrities love to call their children quirky names. The latest trend for baby names is the 'last letter trend'. The rules of the trend are as follows: the first letter of a child's name should be the same as the last letter of their older sibling. For example:

Suri (1st child), Ireland (2nd child), Diva (3rd child), Aleph (4th child)

And so on...

Create a function validName which accepts an array of names. It should return "Congratulations, your baby names are compatible!" if all of the names follow the rule. It should return "Back to the drawing board, your baby names are not compatible." if all of the names do not follow the rule.

If a couple only has one child return "Congratulations, you can choose any name you like!"

If the array is empty return "You must test at least one name."

Notes:

- Names may be hyphenated or two words e.g. Blue Ivy or Jean-Paul
- Names will not include any other characters apart from letters, hyphens or spaces.

## My Solution

**JavaScript**

```js
const validName = (arr) => {
  if (arr.length < 1) return 'You must test at least one name.';
  if (arr.length < 2) return 'Congratulations, you can choose any name you like!';
  const isValid = arr.every((el, idx) => idx < 1 || new RegExp(el[0], 'i').test(arr[idx - 1].at(-1)));
  return isValid
    ? 'Congratulations, your baby names are compatible!'
    : 'Back to the drawing board, your baby names are not compatible.';
};
```

### User Solution

**JavaScript**

```js
const validName = (array) =>
  array.length < 1
    ? `You must test at least one name.`
    : array.length < 2
    ? `Congratulations, you can choose any name you like!`
    : array.slice(1).every((val, idx) => array[idx].endsWith(val[0].toLowerCase()))
    ? `Congratulations, your baby names are compatible!`
    : `Back to the drawing board, your baby names are not compatible.`;
```

## Takeaways

1. Don't forget about `String.prototype.endsWith(char)`!
