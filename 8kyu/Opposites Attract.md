# [Opposites Attract](https://www.codewars.com/kata/555086d53eac039a2a000083)

## Description

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

## My Solution

**JavaScript**

```js
const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;
```

```js
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;
```

**Python**

```py
def lovefunc(flower1, flower2):
    return (flower1 + flower2) % 2
```

## Takeaways

1. In JavaScript, 1 is _truthy_, but it is not actually the value `true`. However, Python seems to be different; if we return `1`, it is the same as returning `False`.
