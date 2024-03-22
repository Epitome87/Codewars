# [Number Zoo Patrol](https://www.codewars.com/kata/5276c18121e20900c0000235)

## Description

**Background:**

You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

**Task:**

Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

Note: huge lists will be tested.

**Examples:**

```
[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1
```

## My Solution

**JavaScript**

```js
const findNumber = (array) => {
  const n = array.length + 1;
  const targetSum = (n * (n + 1)) / 2;
  const foundSum = array.reduce((acc, cur) => acc + cur, 0);
  return targetSum - foundSum;
};
```

**Python**

```py
def find_missing_number(numbers):
    n = len(numbers) + 1
    target_sum = n * (n + 1) / 2
    current_sum = sum(numbers)
    missing_num = target_sum - current_sum
    return missing_num
```
