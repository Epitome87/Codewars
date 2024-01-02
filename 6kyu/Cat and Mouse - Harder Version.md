# [Cat and Mouse - Harder Version](https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf)

## Description

You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

Also, the cat cannot jump over the dog.

So:

if j = 5:

`..C.....m`. returns `'Caught!'` <-- not more than j characters between

`.....C............m......` returns `'Escaped!'` <-- as there are more than j characters between the two, the cat can't jump far enough

if j = 10:

`...m.........C...D` returns `'Caught!'` <--Cat can jump far enough and jump is not over dog

`...m....D....C.......` returns `'Protected!'` <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if all three animals are not present, return `'boring without all three'`

## My Solution

**JavaScript**

```js
const catMouse = (x, j) => {
  if (!x.includes('C') || !x.includes('m') || !x.includes('D')) return 'boring without all three';
  if (Math.abs(x.indexOf('C') - x.indexOf('m')) > j) return 'Escaped!';
  if (x.replace(/\./g, '') === 'CDm' || x.replace(/\./g, '') === 'mDC') return 'Protected!';
  return 'Caught!';
};
```

### User Solution

**JavaScript**

```js
function catMouse(x, j) {
  var dLoc = x.indexOf('D');
  var cLoc = x.indexOf('C');
  var mLoc = x.indexOf('m');

  //Check if all them are there
  if (dLoc == -1 || cLoc == -1 || mLoc == -1) return 'boring without all three';

  //Check if cat can jump far enough
  if (Math.abs(cLoc - mLoc) <= j) {
    //Check if dog is in the way
    if (dLoc > cLoc && dLoc < mLoc && cLoc + j >= dLoc) {
      return 'Protected!';
    } else if (dLoc > mLoc && dLoc < cLoc && cLoc - j <= dLoc) {
      return 'Protected!';
    } else return 'Caught!';
  } else return 'Escaped!';
}
```
