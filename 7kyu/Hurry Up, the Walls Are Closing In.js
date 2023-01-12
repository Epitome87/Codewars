/*
"Given a list walls closing in at you, can you make it past those walls without being hit?"
Input
walls: an array of 2-ples, each 2-ple storing non-negative numbers representing the distance of the walls closing in at you from each side respectively to the center of the room.
Output
return a boolean indicating whether it is possible to run past the walls without being hit.
Specification
You are at the left side in the center of the room
You want to reach the right side in the center of the room
You can only move in a straight line across the room
Walls are closing in at you from both sides of the room
Walls stop once they hit the center of the room
You and the walls move at the same speed
You get hit by a wall if you are on the same tile as a wall
If a wall reaches a tile ahead of you, you cannot make it past that wall anymore
Input Constraints
50 tests with 1 <= number of walls <= 4
50 tests with 5 <= number of walls <= 15
50 tests with 16 <= number of walls <= 50
50 tests with 51 <= number of walls <= 100
0 <= starting distance of walls to center of room <= 120
Examples
In the examples below, you start on tile A and want to reach tile B. You have to walk across the center of the room -. Walls W are closing in on you from the north and south.

Walk in the park
walls: [[7, 7], [7, 7], [7, 7], [7, 7]]
expected: true

steps:

start     1       2       3       4       end

 WWWW     WWWW    WWWW    WWWW    WWWW    WWWW
 ....     WWWW    WWWW    WWWW    WWWW    WWWW
 ....     ....    WWWW    WWWW    WWWW    WWWW
 ....     ....    ....    WWWW    WWWW    WWWW
 ....     ....    ....    ....    WWWW    WWWW
 ....     ....    ....    ....    ....    WWWW
 ....     ....    ....    ....    ....    ....
A----B    A...B   .A..B   ..A.B   ...AB   ....A
 ....     ....    ....    ....    ....    ....
 ....     ....    ....    ....    ....    WWWW
 ....     ....    ....    ....    WWWW    WWWW
 ....     ....    ....    WWWW    WWWW    WWWW
 ....     ....    WWWW    WWWW    WWWW    WWWW
 ....     WWWW    WWWW    WWWW    WWWW    WWWW
 WWWW     WWWW    WWWW    WWWW    WWWW    WWWW
Close call
walls: [[2, 2], [3, 3], [4, 4]]
expected: true

steps:

start     1       2       3       end

 WWW      WWW     WWW     WWW     WWW
 WW.      WWW     WWW     WWW     WWW
 W..      WW.     WWW     WWW     WWW
 ...      W..     WW.     WWW     WWW
A---B     A--B    WA.B    WWAB    WWWA
 ...      W..     WW.     WWW     WWW
 W..      WW.     WWW     WWW     WWW
 WW.      WWW     WWW     WWW     WWW
 WWW      WWW     WWW     WWW     WWW
So close .. but we can't make it
walls: [[2, 2], [3, 3], [3, 4]]
expected: false

steps:

start     1       2       end       

 WWW      WWW     WWW     WWW     
 WWW      WWW     WWW     WWW     
 W..      WWW     WWW     WWW     
 ...      W..     WWW     WWW     
A---B     A--B    WA.B    WWXB     <-- X is position the north wall hits us
 ...      W..     WW.     WWW     
 W..      WW.     WWW     WWW     
 WW.      WWW     WWW     WWW     
 WWW      WWW     WWW     WWW     
We stand no chance
walls: [[3, 3], [1, 1], [3, 3]]
expected: false

steps:

start     end                

 WWW      WWW             
 .W.      WWW            
 .W.      .W.                   
A---B     AW-B    <-- A is blocked by walls     
 .W.      .W.            
 .W.      WWW             
 WWW      WWW            
*/

// My solution:
const canEscape = (walls) => {
  const res = walls.map(([north, south], idx) => [north - idx, south - idx]);
  return !res.some(([north, south]) => north <= 1 || south <= 1);
};

// Top user solution:
function canEscape(walls) {
  return walls.every(([a, b], i) => a > ++i && b > i);
}

// Another good user solution:
function canEscape(walls) {
  return walls.reduce(
    (possible, [nord, south], i) =>
      possible && nord > ++i && south > i ? possible : false,
    true
  );
}
