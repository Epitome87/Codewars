# [Grasshopper - Array Mean](https://www.codewars.com/kata/55d277882e139d0b6000005d)

## Description

Find the mean (average) of a list of numbers in an array.

To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of `1, 3, 5, 7`

1. Add all of the numbers

```
1+3+5+7 = 16
```

2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

```
16/4 = 4
```

3. The mean (or average) of this list is 4

## My Solution

**JavaScript**

```js
const findAverage = (nums) => nums.reduce((sum, curr) => sum + curr, 0) / nums.length;
```

**Python**

```py
def find_average(nums):
    sum = 0
    for i in nums:
        sum += i
    return sum / len(nums)
```

### User Solution

**Python**

```py
def find_average(nums):
    return sum(nums) / len(nums) if nums else 0
```
