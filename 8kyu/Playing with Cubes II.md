# [Playing with Cubes II](https://www.codewars.com/kata/55c0ac142326fdf18d0000af)

Hey Codewarrior!

You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

The constructor taking no arguments should assign 0 to Cube's Side property.

```js
class Cube {
  constructor(numSides = 0) {
    this.setSide(numSides);
  }

  getSide() {
    return this.side;
  }

  setSide(n) {
    this.side = Math.abs(n);
  }
}
```

**Python**

```py
class Cube(object):
    def __init__(self, side = 0):
        self.set_side(side)

    def get_side(self):
        return self.__side

    def set_side(self, new_side):
        self.__side = abs(new_side)
```
