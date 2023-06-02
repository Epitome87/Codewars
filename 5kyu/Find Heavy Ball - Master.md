# [Find Heavy Ball - Level: Master](https://www.codewars.com/kata/544034f426bc6adda200000e)

## Description

There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find its number.

Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

getWeight returns:

-1 if left pan is heavier

1 if right pan is heavier

0 if both pans weight the same

Examples of scales.getWeight() usage:

scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

So where's the catch, you may ask. Well - the scales is very old. You can use it only TWICE before the scale breaks.

Too hard ? Try lower levels:

novice: https://www.codewars.com/kata/544047f0cf362503e000036e  
conqueror: https://www.codewars.com/kata/54404a06cf36258b08000364  
Still too easy ? Try this kata - ubermaster (made by by bellmyer): https://www.codewars.com/kata/find-heavy-ball-level-ubermaster

## My Solution

**JavaScript**

```js
const findBall = (scales) => {
  let leftPan = [0, 1, 2];
  let rightPan = [5, 6, 7];
  let weight = scales.getWeight(leftPan, rightPan);

  if (weight === -1) return leftPan[scales.getWeight([0], [2]) + 1];
  if (weight === 1) return rightPan[scales.getWeight([5], [7]) + 1];
  return scales.getWeight([3], [4]) === -1 ? 3 : 4;
};
```

```js
const findBall = (scales) => {
  let leftPan = [0, 1, 2];
  let rightPan = [5, 6, 7];
  let weight = scales.getWeight(leftPan, rightPan);

  if (weight === -1) {
    weight = scales.getWeight([0], [2]);
    return leftPan[weight + 1];
  }

  if (weight === 1) {
    weight = scales.getWeight([5], [7]);
    return rightPan[weight + 1];
  }

  weight = scales.getWeight([3], [4]);
  return weight === -1 ? 3 : 4;
};
```

### User Solution

**JavaScript**

```js
// Clever recursive function
function findBall(scales) {
  function w(balls) {
    var l = balls.length;
    var p = Math.ceil(l / 3);
    if (l === 1) {
      return balls[0];
    }
    var left = balls.slice(0, p);
    var right = balls.slice(-p);
    var middle = balls.slice(p, l - p);
    var result = scales.getWeight(left, right);
    return result == -1 ? w(left) : result == 1 ? w(right) : w(middle);
  }

  return w([0, 1, 2, 3, 4, 5, 6, 7]);
}
```
