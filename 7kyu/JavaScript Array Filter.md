# [JavaScript Array Filter](https://www.codewars.com/kata/514a6336889283a3d2000001)

## Description

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

```js
getEvenNumbers([2, 4, 5, 6]); // should == [2,4,6]
```

## My Solution

**JavaScript**

```js
const getEvenNumbers = (numbersArray) => numbersArray.filter((n) => n % 2 === 0);
```

```js
const getEvenNumbers = (numbersArray) => numbersArray.filter((n) => !(n % 2));
```

**Python**

```py
def get_even_numbers(arr):
    return list(filter(lambda x: x % 2 == 0, arr))
```
