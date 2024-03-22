# [A Disguised Sequence (I)](https://www.codewars.com/kata/563f0c54a22b9345bf000053)

## Description

Given u<sub>0</sub> = 1, u<sub>1</sub> = 2 and the relation 6u<sub>n</sub>u<sub>n+1</sub> - 5u<sub>n</sub>u<sub>n+2</sub> + u<sub>n+1</sub>u<sub>n+2</sub> = 0 calculate u<sub>n</sub> for any integer n >= 0.

**Examples:**

Call `fcn` the function such as fcn(n) = u<sub>n</sub>.

```
fcn(17) -> 131072; fcn(21) -> 2097152
```

**Remark:**

You can take two points of view to do this kata:

- the first one purely algorithmic from the definition of u<sub>n</sub>
- the second one - not at all mandatory, but as a complement - is to get a bit your head around and find which sequence is hidden behind u<sub>n</sub>.

## My Solution

**JavaScript**

```js
const fcn = (n) => 2 ** n;
```

**Python**

```py
def fcn (n):
    return 2 ** n
```
