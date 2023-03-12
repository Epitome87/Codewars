/*
You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
 */

// My solution:
function direction(facing, turn) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const startIdx = directions.indexOf(facing);
  const endIdx = (startIdx + turn / 45) % directions.length;
  return directions[endIdx >= 0 ? endIdx : directions.length + endIdx];
}

// Top user solution:
function direction(facing, turn) {
  const arr = 'N NE E SE S SW W NW'.split(' ');
  return arr[(arr.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8];
}
