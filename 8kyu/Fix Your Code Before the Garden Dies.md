# [Fix Your Code Before the Garden Dies!](https://www.codewars.com/kata/57158fb92ad763bb180004e7)

## Description

You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!

Starting (bugged) Python code:

```py
def rain_amount(mm)
if (rain_amount = 40):
         return "You need to give your plant " + {rain_amount - 40} + " mm of water"
    if else:
         return "Your plant has had more than enough water for today!"
```

## My Solution

**JavaScript**

```js
function rainAmount(mm) {
  if (mm < 40) return `You need to give your plant ${40 - mm}mm of water`;
  return 'Your plant has had more than enough water for today!';
}
```

**Python**

```py
def rain_amount(rain_amount):
    if rain_amount < 40:
        return f"You need to give your plant {40 - rain_amount}mm of water"
    return "Your plant has had more than enough water for today!"
```
