/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// My solution:
const validValue = (value) => (value < 0 ? 0 : value > 255 ? 255 : value);
const toHex = (value) => value.toString(16).padStart(2, '0').toUpperCase(0);
const rgb = (r, g, b) => toHex(validValue(r)) + toHex(validValue(g)) + toHex(validValue(b));

// Top user solution:
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return '00';
  }
  if (d > 255) {
    return 'FF';
  }
  return ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
}

// Clever user solution using bit operations:
function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  let color = (r << 16) + (g << 8) + b;

  return ('00000' + color.toString(16).toUpperCase()).slice(-6);
}
