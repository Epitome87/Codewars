# [Grasshopper - Debug](https://www.codewars.com/kata/55cb854deb36f11f130000e1)

## Description

Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

    celsius = (fahrenheit - 32) * (5/9)

Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

**Original (bugged) code**

```js
function weatherInfo (temp) {
  var c : convert(temp)
  if (c > 0)
    return c + " is freezing temperature"
  else
    return c + " is above freezing temperature"
}

function convertToCelsius (temperature) {
  var celsius = (tempertur) - 32 + (5/9)
  return temperature
}
```

## My Solution

**JavaScript**

```js
function weatherInfo(temp) {
  const c = convertToCelsius(temp);
  if (c <= 0) return c + ' is freezing temperature';
  else return c + ' is above freezing temperature';
}
```

```js
function convertToCelsius(temperature) {
  const celsius = (temperature - 32) * (5 / 9);
  return celsius;
}
```

**Python**

```py
def weather_info (temp):
    c = convert_to_celsius(temp)
    return f'{c} is freezing temperature' if c <= 0 else  f'{c} is above freezing temperature'

def convert_to_celsius (temperature):
    return (temperature - 32) * (5 / 9)
```
