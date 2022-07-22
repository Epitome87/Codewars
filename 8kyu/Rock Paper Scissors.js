/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

// My solution -- not elegant! TODO: Realize when there's duplicate conditions and refactor (checking for draws 3x!)
const rps = (p1, p2) => {
  if (p1 === 'rock') {
    if (p2 === 'rock') return 'Draw!';
    else if (p2 === 'paper') return 'Player 2 won!';
    else return 'Player 1 won!';
  } else if (p1 === 'paper') {
    if (p2 === 'rock') return 'Player 1 won!';
    else if (p2 === 'paper') return 'Draw!';
    else return 'Player 2 won!';
  } else {
    if (p2 === 'rock') return 'Player 2 won!';
    else if (p2 === 'paper') return 'Player 1 won!';
    else return 'Draw!';
  }
};

// Very clever user solution:
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return 'Draw!';
//   }
//   return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
// };

// Another very clever user solution:
// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!';
//   var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
//   if (p2 === rules[p1]) {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   }
// };
