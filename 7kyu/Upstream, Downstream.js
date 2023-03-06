/*
Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

Input

You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output

The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

Show some love ;) Rank and Upvote!
*/

// My solution:
const time = (distance, boatSpeed, stream) => {
  const [direction, streamSpeed] = stream.split(' ');
  return +(distance / (boatSpeed + (direction === 'Downstream' ? +streamSpeed : -streamSpeed))).toFixed(2);
};

// Top user solution:
function time(distance, boatSpeed, stream) {
  const [dir, delta] = stream.split(' ');
  const speed = boatSpeed + (dir[0] === 'U' ? -delta : +delta);
  return Math.round((distance / speed) * 100.0) / 100.0;
}

/* Takeaways:
1) Consider Math.round(val * 100) / 100 instead of +(val).toFixed(2). A .toFixed(3) equivalent would be Math.round(val * 1000) / 1000, etc.
*/
