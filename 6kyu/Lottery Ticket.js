/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

// My solution:
const bingo = (ticket, win) =>
  ticket.reduce((acc, curr) => ([...curr[0]].some((c) => c.charCodeAt() === curr[1]) ? acc + 1 : acc), 0) >= win
    ? 'Winner!'
    : 'Loser!';

// Good user solution:
function bingo(ticket, win) {
  var count = 0;

  ticket.forEach((game) => {
    if (game[0].includes(String.fromCharCode(game[1]))) {
      count++;
    }
  });

  return count >= win ? 'Winner!' : 'Loser!';
}
