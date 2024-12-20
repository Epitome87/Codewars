# [Predict Your Age](https://www.codewars.com/kata/5aff237c578a14752d0035ae)

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

- Take a list of ages when each of your great-grandparent died.
- Multiply each number by itself.
- Add them all together.
- Take the square root of the result.
- Divide by two.

**Example**

```js
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86;
```

Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

## My Solution

**JavaScript**

```js
const predictAge = (...ages) => Math.hypot(...ages) >> 1;
```

```js
const predictAge = (...ages) => Math.floor(Math.hypot(...ages) / 2);
```

```js
const predictAge = (...ages) => Math.floor(Math.sqrt(ages.reduce((acc, cur) => acc + cur * cur, 0)) / 2);
```

**Python**

```py
def predict_age(*age):
    return sum(x * x for x in age) ** 0.5 // 2
```
