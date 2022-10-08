/*
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/

// My solution:
const meeting = (rooms) => {
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i] === 'O') return i;
  }

  return 'None available!';
};

// My less-dumb solution:
const meeting = (rooms) =>
  rooms.indexOf('O') !== -1 ? rooms.indexOf('O') : 'None available!';

// Clever user solution (although bad practice to create params for merely saving a line of code):
const meeting = (x, empty = x.indexOf('O')) =>
  empty < 0 ? 'None available!' : empty;
