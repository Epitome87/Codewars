/*
There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find its number.

Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

getWeight returns:

-1 if left pan is heavier

1 if right pan is heavier

0 if both pans weight the same

Examples of scales.getWeight() usage:

scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

So where's the catch, you may ask. Well - the scales is very old. You can use it only 4 TIMES before the scale breaks.

Too easy ? Try higher levels:

conqueror
master
*/

// My solution:
const findBall = (scales) => {
  for (let i = 1; i < 8; i++) {
    let leftPan = [i - 1];
    let rightPan = [8 - i];
    let w = scales.getWeight(leftPan, rightPan);

    if (w === -1) return leftPan[0];
    if (w === 1) return rightPan[0];
  }
};

// Top user solution:
function findBall(scales) {
  var balls = [0, 1, 2, 3, 4, 5, 6, 7];
  while (balls.length > 1) {
    var left = balls.slice(0, (balls.length / 2) | 0);
    var right = balls.slice((balls.length / 2) | 0);
    balls = scales.getWeight(left, right) > 0 ? right : left;
  }
  return balls[0];
}
