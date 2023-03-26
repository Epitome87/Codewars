/*
When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

Example
"#FF9933" --> {r: 255, g: 153, b: 51}
*/

// My refactored solution:
const hexStringToRGB = (hexStr) => {
  const [r, g, b] = [...Array(3)].map((_, i) => parseInt(hexStr.slice(i * 2 + 1, i * 2 + 3), 16));
  return { r, g, b };
};

// My original solution:
const hextStrToRGB = (hextStr) => {
  return {
    r: parseInt(hextStr.slice(1, 3), 16),
    g: parseInt(hextStr.slice(3, 5), 16),
    b: parseInt(hextStr.slice(5), 16),
  };
};

// My favorite user solution:
const hexStringToRGB = (str) => {
  const [r, g, b] = str.match(/\w{2}/g).map((x) => parseInt(x, 16));
  return { r, g, b };
};
