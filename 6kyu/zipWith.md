# [zipWith](https://www.codewars.com/kata/5825792ada030e9601000782)

## Description

**Task**

zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

**Examples**

```
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
Input validation
Assume all input is valid.
```

## My Solution

**JavaScript**

```js
const zipWith = (fn, a0, a1) =>
  Array.from({ length: Math.min(a0.length, a1.length) }, (_, idx) => fn(a0[idx], a1[idx]));
```

**Python**

```py
def zip_with(fn,a1,a2):
    return [fn(x, a2[i]) for i, x in enumerate(a1[:len(a2)])]
```

### User Solution

**Python**

```py
def zip_with(fn, a1, a2):
    return list(map(fn, a1, a2))
```
