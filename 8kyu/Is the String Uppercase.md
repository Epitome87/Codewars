# [Is the String Uppercase?](https://www.codewars.com/kata/56cd44e1aa4ac7879200010b)

## Description

Create a method to see whether the string is ALL CAPS.

**Examples (input -> output)**

```
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
```

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

## My Solution

**JavaScript**

```js
String.prototype.isUpperCase = function () {
  return this.valueOf() === this.toUpperCase();
};
```

```js
String.prototype.isUpperCase = function () {
  return this === this.toUpperCase();
};
```

**Python**

```py
def is_uppercase(inp):
    return all(not c.islower() for c in inp)
```

### User Solution

**Python**

```py
def is_uppercase(inp):
    return inp.upper() == inp
```
