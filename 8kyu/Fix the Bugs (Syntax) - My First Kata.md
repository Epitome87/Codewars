# [Fix the Bugs (Syntax) - My First Kata](https://www.codewars.com/kata/56aed32a154d33a1f3000018)

## Description

**Overview**

Hello, this is my first Kata so forgive me if it is of poor quality.

In this Kata you should fix/create a program that `return`s the following values:

- `false/False` if either a or b (or both) are not numbers
- `a % b` plus `b % a` if both arguments are numbers

You may assume the following:

1.  If `a` and `b` are both numbers, neither of `a` or `b` will be `0`.

**Language-Specific Instructions**

**Javascript and PHP**

In this Kata you should try to fix all the syntax errors found in the code.

Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.

**Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch.**

Original (bugged) JavaScript code:

```js
func myFirstKata(a b) {
  if {typeof(a) !! "number" or typeof(b) !! "number"} (
    false;
  ) else (
    a % b ++ b % a;
  )
}
```

Original (bugged) Python code:

```py
def my_first_kata(a,b):
    if type(a) or type(b) == "number": return False
    else:
        return a % b ++ b % a
```

## My Solution

**JavaScript**

```js
const myFirstKata = (a, b) => !(typeof a !== 'number' || typeof b !== 'number') && (a % b) + (b % a);
```

```js
const myFirstKata = (a, b) => (typeof a !== 'number' || typeof b !== 'number' ? false : (a % b) + (b % a));
```

**Python**

```py
def my_first_kata(a, b):
    if not isinstance(a, int) or not isinstance(b, int):
        return False
    else:
        return (a % b) + (b % a) if a * b != 0 else 0
```

### User Solution

**Python**

```py
def my_first_kata(a, b):
    if type( a ) == type( b ) == int and all( (a, b) ):
        return a % b + b % a
    return False
```
