# [Stacked Balls - 3D (Square Base)](https://www.codewars.com/kata/5bb493932ce53339dc0000c2)

## Description

**Background**

I have stacked some cannon balls in a square pyramid.

Like this,

![](https://i.imgur.com/6d5Kpva.png 'cannon balls')

**Kata Task**

Given the number of `layers` of my stack, what is the total height?

Return the height as multiple of the ball diameter.

**Example**

The image above shows a stack of 4 layers.

**Notes**

- `layers` >= 0
- approximate answers (within 0.001) are good enough

## My Solution

**JavaScript**

```js
const stackHeight3d = (layers) => layers && (layers - 1) / Math.sqrt(2) + 1;
```

**Python**

```py
def stack_height_3d(layers):
    return layers and (layers - 1) / 2 ** 0.5 + 1
```
