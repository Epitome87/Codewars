# [More Than Zero?](https://www.codewars.com/kata/55a710b462afc49a540000b9)

## Description

Correct this code so that it takes one argument, `x`, and returns "`x` is more than zero" if `x` is positive (and nonzero), and otherwise, returns "`x` is equal to or less than zero." In both cases, replace `x` with the actual value of `x`.

Starting (bugged) code:

```py
def corrections(x,y,z
    elif x > 0
        append float(x) + (is more than zero."
    elsse
        retorn float(x) + "is equal to or less than zero.)
```

## My Solution

**Python**

```py
def corrections(x):
    return f"{x} is {'more' if x > 0 else 'equal to or less'} than zero."
```
