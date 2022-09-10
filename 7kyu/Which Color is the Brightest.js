/*
One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

For example,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Note that both input and output should use upper case for characters A, B, C, D, E, F.
*/

// My solution:
const brightest = (colors) => {
  let brightestIndex = 0;
  let brightestColor = 0;

  for (let i = 0; i < colors.length; i++) {
    const red = parseInt(colors[i].slice(1, 3), 16);
    const green = parseInt(colors[i].slice(3, 5), 16);
    const blue = parseInt(colors[i].slice(5, 7), 16);

    let max = Math.max(red, green, blue);
    if (max > brightestColor) {
      brightestColor = max;
      brightestIndex = i;
    }
  }

  return colors[brightestIndex];
};

// Top user solution:
function brightest(colors) {
  //Find brightness value of each color
  //Sort based on brightness
  //Return the first index, since it will be the brightest
  const sortedColors = colors;
  sortedColors.sort((a, b) => {
    let rValue = parseInt(a.slice(1, 3), 16);
    let gValue = parseInt(a.slice(3, 5), 16);
    let bValue = parseInt(a.slice(5), 16);
    let brightness = Math.max(rValue, gValue, bValue);

    let rValue2 = parseInt(b.slice(1, 3), 16);
    let gValue2 = parseInt(b.slice(3, 5), 16);
    let bValue2 = parseInt(b.slice(5), 16);
    let brightness2 = Math.max(rValue2, gValue2, bValue2);
    return brightness2 - brightness;
  });
  return sortedColors[0];
}

// Another good user solution:
function sB(s) {
  return Math.max(...[s.slice(1, 3), s.slice(3, 5), s.slice(5, 7)].map((x) => parseInt(x, 16)));
}

function brightest(colors) {
  return colors.sort((a, b) => sB(b) - sB(a))[0];
}
