# [Keep Hydrated!](https://www.codewars.com/kata/582cb0224e56e068d800003c)

## Description

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

```
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
```

## My Solution

**JavaScript**

```js
const litres = (time) => (time * 0.5) ^ 0;
```

```js
const litres = (time) => parseInt(time * 0.5);
```

```js
const litres = (time) => Math.floor(time * 0.5);
```

**Python**

```py
def litres(time):
    return time // 2
```
