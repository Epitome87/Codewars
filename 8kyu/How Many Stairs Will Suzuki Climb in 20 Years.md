# [How Many Stairs Will Suzuki Climb in 20 Years?](https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e)

## Description

Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total \* 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

    stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

    sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]

Your function should return the 20 year estimate of the stairs climbed using the formula above.

## My Solution

**JavaScript**

```js
const stairsIn20 = (s) => s.flat().reduce((sum, cur) => sum + cur, 0) * 20;
```

```js
const stairsIn20 = (s) => s.reduce((sum, cur) => sum + cur.reduce((sum, cur) => sum + cur, 0), 0) * 20;
```

```js
const stairsIn20 = (s) => {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    total += s[i].reduce((acc, cur) => acc + cur, 0);
  }

  return total * 20;
};
```

**Python**

```js
def stairs_in_20(stairs):
    return sum(sum(lst) for lst in stairs) * 20
```

```py
def stairs_in_20(stairs):
    result = 0

    for lst in stairs:
        result += sum(lst)

    return result * 20
```

### User Solution

**JavaScript**

```js
const stairsIn20 = (s) => [].concat(...s).reduce((sum, cur) => sum + cur, 0) * 20;
```

## Takeaways

1. `[].concat(...s)` cannot always be replaced with `[...s]`, as in the case with the newArr variable in the user solution. Why is this?
2. Remember the `flat()` method for arrays!
3. Instead of using `flat()`, consider: `[].concat(...arr)`
   def stairs_in_20(stairs):
   return sum(sum(lst) for lst in stairs) \* 20
