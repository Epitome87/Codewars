/*
Boxlines
Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)

Notes
Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
X,Y and Z are strictly positive, and can go as large as 2^16 - 1
Interactive Example
The following is a diagram of a 2*1*1 box. Mouse over the line segments to see what should be counted!

Interactive diagram made by @awesomead

This is my first kata, so I hope every one will enjoy it <3
*/

// My solution:
const f = (x, y, z) => 3 * x * y * z + 2 * (x * y + x * z + y * z) + x + y + z;

// Most understandable user solution:
function f(X, Y, Z) {
  // Compute the number of edges along the X, Y, and Z directions
  const edgesX = X * (Y + 1) * (Z + 1);
  const edgesY = Y * (X + 1) * (Z + 1);
  const edgesZ = Z * (X + 1) * (Y + 1);

  // Return the total number of edges
  return edgesX + edgesY + edgesZ;
}
