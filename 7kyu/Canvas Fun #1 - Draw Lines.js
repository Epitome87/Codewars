/*
Welcome to Canvas Fun ;-) In this series, we'll be learning how to draw the image on a canvas.

Task
Given some points, your task is to draw lines between two adjacent points.

points is given by a 2D integer array. Each subarray has two elements, means the x-coordinate, y-coordinate of each point.

The basic canvas(width 100 x height 100), background color(white) and pen's color(red) are already defined in the initial code(please don't delete or modify them).

You just need to draw the lines, using the following two methods:

moveTo(x,y)
Set the current coordinate to (x, y).

lineTo(x, y)
Draw a line from current coordinate to the target coordinate (x,y).

Note: After lineTo operation, the current coordinate became to (x,y). You don't need use moveTo(x,y) to reset the current coordinate.

Example
For points = [[0,0],[99,99]], the output image should be:


You just need draw a line from (0,0) to (99,99)

For points = [[20,20],[80,20],[80,80],[20,80],[20,20]], the output image should be:


You need draw four lines for each two adjacent points:

from (20,20) to (80,20)
from (80,20) to (80,80)
from (80,80) to (20,80)
from (20,80) to (20,20)
For points = [[50,10],[20,80],[80,80],[50,10]], the output image should be:
*/

// My solution:
function drawLines(points) {
  var canvas = new Canvas(100, 100); //Create a 100 x 100 canvas
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 100, 100); //Draw background
  ctx.strokeStyle = '#ff0000'; //Set pen's color
  ctx.beginPath();
  //Don't delete or modify the code above

  for (let [x, y] of points) ctx.lineTo(x, y);

  //Don't delete or modify the following code
  ctx.stroke(); //Draw the path you made above
  return canvas.toDataURL(); //Returns the image data
}

// Another good solution:
function drawLines(points) {
  let [start, ...pts] = points;
  if (start) ctx.moveTo(...start);
  for (const pnt of pts) ctx.lineTo(...pnt);
}
