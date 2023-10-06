# [Print Count and Numbers](https://www.codewars.com/kata/559af787b4b8eac78b000022)

## Description

Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: countMe('1123') (count_me in Ruby)

- Here 1 comes twice so <count><integer> will be "21"
- then 2 comes once so <count><integer> will be "12"
- then 3 comes once so <count><integer> will be "13"

hence output string will be "211213".

Similarly countMe('211213') will return '1221121113' (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings

## My Solution

**JavaScript**

```js
const countMe = (data) => {
  if (/[^0-9]/.test(data)) return '';

  let result = '';

  for (let i = 1, frequency = 1; i <= data.length; i++) {
    if (data[i] === data[i - 1]) frequency++;
    else {
      result += frequency + data[i - 1];
      frequency = 1;
    }
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
const countMe = (data) => (/\D/.test(data) ? `` : data.replace(/(\d)\1*/g, (val, $1) => val.length + $1));
```

## Takeaways

1. The Regex above may be very useful, as finding sequences of repeating characters is a relatively common task.
