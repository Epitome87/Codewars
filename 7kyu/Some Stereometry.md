# [Some Stereometry](https://www.codewars.com/kata/5970915e54c27bd71000007b)

## Description

You will be given a sphere with radius r. Imagine that sphere gets cut with a plane, in this case the figure that is made with this cut is a circle. You will also be given the distance h between centres of sphere and circle.Your task is to return the surface area of the original sphere,area of circle and perimeter of circle, all of them rounded to 3 decimal places and order must be same as in the description.

(Check Kata link for important diagram of the sphere in question)

## My Solution

**Python**

```py
from math import pi

def stereometry(r, h):
    circle_radius = ((r ** 2) - (h ** 2)) ** 0.5
    surface_area = round(4 * pi * r ** 2, 3)
    area = round(pi * circle_radius ** 2, 3)
    perimeter = round(2 * pi * circle_radius, 3)
    return (surface_area, area, perimeter)
```
