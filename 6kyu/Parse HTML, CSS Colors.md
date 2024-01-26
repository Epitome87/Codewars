# [Parse HTML / CSS Colors](https://www.codewars.com/kata/58b57ae2724e3c63df000006)

## Description

In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS. Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).

**Input:**

The input string represents one of the following:

- **6-digit hexadecimal** - "#RRGGBB"
  e.g. "#012345", "#789abc", "#FFA077"
  Each pair of digits represents a value of the channel in hexadecimal: 00 to FF

- **3-digit hexadecimal** - "#RGB"
  e.g. "#012", "#aaa", "#F5A"
  Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.

- **Preset color name**
  e.g. "red", "BLUE", "LimeGreen"
  You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), or preset-colors (Clojure). The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").

**Examples:**

```js
parseHTMLColor('#80FFA0'); // => { r: 128, g: 255, b: 160 }
parseHTMLColor('#3B7'); // => { r: 51,  g: 187, b: 119 }
parseHTMLColor('LimeGreen'); // => { r: 50,  g: 205, b: 50  }
```

## My Solution

**JavaScript**

```js
const parseHTMLColor = (color) => {
  const convert = (hex) => {
    const [r, g, b] = [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)].map((n) => parseInt(n, '16'));
    return { r, g, b };
  };

  if (/^#[0-9A-F]{6}$/i.test(color)) return convert(color);
  if (/^#[0-9A-F]{3}$/i.test(color)) return convert(`#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}`);
  return convert(PRESET_COLORS[color.toLowerCase()]);
};
```

### User Solution

**JavaScript**

```js
function parseHTMLColor(color) {
  var key = color.toLowerCase();
  var rgb = (PRESET_COLORS[key] || key).slice(1);

  if (rgb.length === 3) rgb = rgb.replace(/./g, '$&$&');

  var val = parseInt(rgb, 16);

  return {
    r: (val / 65536) | 0,
    g: ((val / 256) | 0) % 256,
    b: val % 256,
  };
}
```
