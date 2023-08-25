# [How Many Days Are We Represented in a Foreign Country?](https://www.codewars.com/kata/58e93b4706db4d24ee000096)

## Description

How many days are we represented in a foreign country?

My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.

Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

Example:

```js
daysRepresented([
  [10, 17],
  [200, 207],
]);
```

Returns 16 because there are two trips of 8 days, which add up to 16.

## My Solution

**JavaScript**

```js
const daysRepresented = (trips) => {
  const days = new Set();
  for (const [arrival, departure] of trips)
    Array.from({ length: departure - arrival + 1 }, (_, i) => arrival + i).forEach(days.add, days);
  return days.size;
};
```

```js
const daysRepresented = (trips) => {
  const set = new Set();
  for (const [arrival, departure] of trips)
    Array.from({ length: departure - arrival + 1 }, (_, i) => arrival + i).forEach((day) => set.add(day));
  return set.size;
};
```

### User Solution

**JavaScript**

```js
const daysRepresented = (trips) =>
  new Set(trips.reduce((pre, [arr, dep]) => [...pre, ...[...Array(++dep - arr)].map((_, idx) => arr + idx)], [])).size;
```

```js
function daysRepresented(trips) {
  const set = new Set();
  trips.map(([a, b]) => {
    for (let i = a; i <= b; ++i) {
      set.add(i);
    }
  });
  return set.size;
}
```
