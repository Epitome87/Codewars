# [Battery Bars](https://www.codewars.com/kata/6ad649de715eb5f5359a7e62)

## Description

Your phone shows its battery as a row of **5 bars**. Each full bar represents 20% of charge. A bar only lights up when its whole 20% is reached.

Write a function `battery_bars(percent)` that returns the battery as a string: `#` for a lit bar, `.` for an empty one, all wrapped in square brackets.

## Examples

```python
battery_bars(100)  # => "[#####]"
battery_bars(70)   # => "[###..]"
battery_bars(20)   # => "[#....]"
battery_bars(19)   # => "[.....]"
battery_bars(0)    # => "[.....]"
```

## Notes

- `percent` is an integer from `0` to `100`

## My Solution

**JavaScript**

```js
const batteryBars = (percent) => {
  const numBars = Math.floor(percent / 20);
  return `[${'#'.repeat(numBars)}${'.'.repeat(5 - numBars)}]`;
};
```

**Python**

```py
def battery_bars(percent):
    num_bars = percent // 20
    return f"[{'#' * num_bars}{'.' * (5 - num_bars)}]"
```
