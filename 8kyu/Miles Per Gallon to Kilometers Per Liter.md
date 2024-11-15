# [Miles Per Gallon to Kilometers Per Liter](https://www.codewars.com/kata/557b5e0bddf29d861400005d)

## Description

Sometimes, I want to quickly be able to convert miles per imperial gallon (`mpg`) into kilometers per liter (`kpl`).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

- 1 Imperial Gallon = 4.54609188 litres
- 1 Mile = 1.609344 kilometres

## My Solution

**JavaScript**

```js
const converter = (mpg) => +((mpg * 1.609344) / 4.54609188).toFixed(2);
```

```js
const LITRES_PER_GALLON = 4.54609188;
const KILOMETERS_PER_MILE = 1.609344;
const converter = (mpg) => Math.round((100 * mpg * KILOMETERS_PER_MILE) / LITRES_PER_GALLON) / 100;
```

**Python**

```py
def converter(mpg):
    return round(mpg * 1.609344 / 4.54609188, 2)
```
