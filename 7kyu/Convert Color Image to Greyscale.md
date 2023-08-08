# [Convert Color Image to Greyscale](https://www.codewars.com/kata/590ee3c979ae8923bf00095b)

## Description

An array of size N x M represents pixels of an image. Each cell of this array contains an array of size 3 with the pixel's color information: [R,G,B]

Convert the color image, into an average greyscale image.

The [R,G,B] array contains integers between 0 and 255 for each color.

To transform a color pixel into a greyscale pixel, average the values of that pixel:

```js
p = [R,G,B] => [(R+G+B)/3, (R+G+B)/3, (R+G+B)/3]
```

Note: the values for the pixel must be integers, therefore you should round floats to the nearest integer.

**Example**

Here's an example of a 2x2 image:

```js
[
  [
    [123, 231, 12],
    [56, 43, 124],
  ],
  [
    [78, 152, 76],
    [64, 132, 200],
  ],
];
```

Here's the expected image after transformation:

```js
[
 [ [122, 122, 122], [74, 74, 74] ],
 [ [102, 102, 102
```

## My Solution

**JavaScript**

```js
const color2grey = (image) =>
  image.map((row) => row.map((cell) => Array(3).fill(Math.round(cell.reduce((acc, cur) => acc + cur, 0) / 3)), 0));
```

```js
const color2grey = (image) => {
  return image.map((row) => {
    return row.map((cell) => {
      const average = Math.round(cell.reduce((acc, cur) => acc + cur, 0) / 3);
      return [average, average, average];
    });
  }, 0);
};
```

### User Solution

**JavaScript**

```js
const color2grey = (image) => image.map((p) => p.map(([r, g, b]) => Array(3).fill(Math.round((r + g + b) / 3))));
```
