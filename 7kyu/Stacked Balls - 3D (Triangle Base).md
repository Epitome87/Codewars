# [Stacked Balls - 3D (Triangle Base)](https://www.codewars.com/kata/5bbad1082ce5333f8b000006)

## Description

**Background**

I have stacked some cannon balls in a triangle-based pyramid.

Like this,

![](https://i.imgur.com/ut4ejG1.png 'cannon balls triangle base')

**Kata Task**

Given the number of `layers` of my stack, what is the total height?

Return the height as multiple of the ball diameter.

**Example**

The image above shows a stack of 3 layers.

**Notes**

- `layers` >= 0
- approximate answers (within 0.001) are good enough

## My Solution

**JavaScript**

```js
const stackHeight3d = (layers) => layers && Math.sqrt(2 / 3) * (layers - 1) + 1;
```

**Python**

```py
def stack_height_3d(layers):
    return layers and ((2 / 3) ** 0.5) * (layers - 1) + 1
```
