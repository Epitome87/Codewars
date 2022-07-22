/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

// MY simple solution
function points(games) {
  let score = 0;

  for (let game of games) {
    let [x, y] = game.split(':');

    if (x > y) score += 3;
    else if (x < y) score += 0;
    else score++;
  }

  return score;
}

// Using higher-order array methods
function points(games) {
  let score = 0;

  games.map((game) => {
    // This works because the challenge specifies the scores will never be two characters in length
    if (game[0] === game[2]) {
      score += 1;
    } else if (game[0] > game[2]) {
      score += 3;
    }
  });

  return score;
}

// Super-clever solution!
const points = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);
