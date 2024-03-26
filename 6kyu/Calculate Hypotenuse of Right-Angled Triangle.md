# [Calculate Hypotenuse of Right-Angled Triangle](https://www.codewars.com/kata/525a3d6b85a9a47fcf00055a)

## Description

To solve this Kata, complete the function, calculateHypotenuse(a,b), which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:

- The returned value should be a number rounded to three decimal places
- An error (ArgumentException in C#) should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)

```js
calculateHypotenuse(1, 1); // returns 1.414
calculateHypotenuse(3, 4); // returns 5
calculateHypotenuse(-2, 1); // throws error
calculateHypotenuse('one', 'two'); // throws error
```

For more information on the hypotenuse, visit: http://en.wikipedia.org/wiki/Hypotenuse

## My Solution

**JavaScript**

```js
const calculateHypotenuse = (a, b) => {
  if (isNaN('0' + a) || isNaN('0' + b)) throw 'Error!';
  return +((a * a + b * b) ** 0.5).toFixed(3);
};
```
