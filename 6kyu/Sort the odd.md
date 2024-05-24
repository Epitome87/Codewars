# [Sort the Odd](https://www.codewars.com/kata/578aa45ee9fd15ff4600090d)

## Description

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

**Examples**

```
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
```

## My Solution

**JavaScript**

```js
const sortArray = (array) => {
  const odds = array.filter((num) => num % 2).sort((a, b) => b - a);
  return array.map((v) => (v % 2 ? odds.pop() : v));
};
```

```js
const sortArray = (array) => {
  const odds = array.filter((num) => num % 2);
  odds.sort((a, b) => a - b);

  const result = [...array];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      result[i] = odds.shift();
    }
  }

  return result;
};
```

**Python**

```py
def sort_array(source_array):
    odds = sorted([x for x in source_array if x % 2], reverse=True)
    return [odds.pop() if x % 2 else x for x in source_array]
```
