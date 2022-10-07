/*
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/

// My solution:
const outed = (meet, boss) =>
  Object.entries(meet).reduce((acc, curr) => acc + (curr[0] === boss ? curr[1] * 2 : curr[1]), 0) /
    Object.values(meet).length <=
  5
    ? 'Get Out Now!'
    : 'Nice Work Champ!';

// Top user solution:
function outed(meet, boss) {
  let names = Object.keys(meet);
  let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}

// Clever user solution:
function outed(c, b) {
  return Object.keys(c).reduce((s, e) => s + c[e] * (e === b ? 2 : 1), 0) / Object.keys(c).length > 5
    ? 'Nice Work Champ!'
    : 'Get Out Now!';
}

/* Takeaways:
1) Instead of using Object.entries in situations like this, using Object.keys and accessing the values appropriately is just as good.
*/
