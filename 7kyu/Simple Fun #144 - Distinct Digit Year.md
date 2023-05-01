# [Simple Fun #144: Distinct Digit Year](https://www.codewars.com/kata/58aa68605aab54a26c0001a6)

## Description

The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

**Input/Output**

- [input] integer year

1000 ≤ year ≤ 9000

- [output] an integer

the minimum year number that is strictly larger than the input number year and all its digits are distinct.

## My Solution

**JavaScript**

```js
const distinctDigitYear = (year) => {
  for (let i = year + 1; ; i++) {
    if (new Set(i.toString()).size === i.toString().length) return i;
  }
};
```

### User Solution

**JavaScript**

```js
function distinctDigitYear(year) {
  while (/(.).*\1/.test(`${++year}`));
  return year;
}
```

## Takeaways

1. We can make a number of improvements over the brute-force solution. For example, if our starting year were 2201, there is no reason to waste time checking 2202 to 2299, as the 2nd digit prevents those years from ever being true.
