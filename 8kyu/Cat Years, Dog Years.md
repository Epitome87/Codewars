# [Cat Years, Dog Years](https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b)

## Description

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was `humanYears` years ago.

Return their respective ages now as `[humanYears, catYears, dogYears]`

NOTES:

- `humanYears` >= 1
- `humanYears` are whole numbers only

**Cat Years**

- 15 cat years for first year
- +9 cat years for second year
- +4 cat years for each year after that

**Dog Years**

- 15 dog years for first year
- +9 dog years for second year
- +5 dog years for each year after that

## My Solution

**JavaScript**

```js
const humanYearsCatYearsDogYears = (humanYears) => {
  if (humanYears === 1) return [humanYears, 15, 15];
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
};
```

```js
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears > 1) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears > 2) {
    catYears = catYears + (humanYears - 2) * 4;
    dogYears = dogYears + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};
```

**Python**

```py
def human_years_cat_years_dog_years(human_years):
    if human_years == 1:
        return [human_years, 15, 15]
    return [human_years, (human_years - 2) * 4 + 24, (human_years - 2) * 5 + 24]
```

### User Solution

**JavaScript**

```js
const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];
```

**Python**

```py
def human_years_cat_years_dog_years(n):
    cat_years = 15 + (9 * (n > 1)) + (4 * (n - 2) * (n > 2))
    dog_years = 15 + (9 * (n > 1)) + (5 * (n - 2) * (n > 2))
    return [n, cat_years, dog_years]
```
