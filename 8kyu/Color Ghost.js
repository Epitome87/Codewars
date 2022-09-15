/*
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

// My solution:
class Ghost {
  constructor() {
    const ranNum = Math.floor(Math.random() * 4);
    this.color =
      ranNum === 0
        ? 'white'
        : ranNum === 1
        ? 'yellow'
        : ranNum === 2
        ? 'purple'
        : 'red';
  }
}

// Top user solution:
var Ghost = function () {
  this.color = ['white', 'yellow', 'purple', 'red'][
    Math.floor(Math.random() * 4)
  ];
};
