# [Pillars](https://www.codewars.com/kata/5bb0c58f484fcd170700063d)

## Description

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

1. number of pillars (≥ 1);
2. distance between pillars (10 - 30 meters);
3. width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

## My Solution

**JavaScript**

```js
const pillars = (numPillars, distance, width) => {
  if (numPillars === 1) return 0;

  return (numPillars - 1) * (distance * 100) + (numPillars - 2) * width;
};
```

```js
// Good user solution:
function pillars(num_pill, dist, width) {
  if (num_pill < 2) return 0;
  const widthAllPillars = (num_pill - 2) * width;
  const distAll = (num_pill - 1) * (dist * 100);

  return distAll + widthAllPillars;
}
```

**Python**


```py
def pillars(num_pill, dist, width):
    if num_pill < 2:
        return 0

    width_all_pillars = (num_pill - 2) * width
    distance_all = (num_pill - 1) * (dist * 100)

    return distance_all + width_all_pillars
```

### User Solution

**Python**

```py
def pillars(num_pill, dist, width):
    return dist * 100 * (num_pill - 1) + width * (num_pill - 2) * (num_pill > 1)
```
