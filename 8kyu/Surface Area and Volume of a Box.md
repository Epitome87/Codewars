# [Surface Area and Volume of a Box](https://www.codewars.com/kata/565f5825379664a26b00007c)

## Description

Write a function that returns the total surface area and volume of a box as an array: `[area, volume]`

## My Solution

**JavaScript**

```js
const getSize = (width, height, depth) => [
  2 * (width * height + width * depth + height * depth),
  width * height * depth,
];
```

**Python**

```py
def get_size(w, h, d):
    return [2 * (w * h + w * d + h * d), w * h * d]
```
