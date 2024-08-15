# [Stacked Balls - 2D](https://www.codewars.com/kata/5bb804397274c772b40000ca)

## Description

**Background**

I have stacked some pool balls in a triangle.

Like this,

![](https://i.imgur.com/RuDkTCH.png 'pool balls')

**Kata Task**

Given the number of `layers` of my stack, what is the total height?

Return the height as multiple of the ball diameter.

**Example**

The image above shows a stack of 5 layers.

**Notes**

- `layers` >= 0
- approximate answers (within 0.001) are good enough

## My Solution

**JavaScript**

```js
const stackHeight2d = (layers) => (!layers ? 0 : ((layers - 1) * Math.sqrt(3)) / 2 + 1);
```

**Python**

```py
def stack_height_2d(layers):
    return (layers - 1) * 3 ** 0.5 / 2 + 1 if layers else 0
```
