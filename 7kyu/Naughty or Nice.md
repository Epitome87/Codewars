# [Naughty or Nice](https://www.codewars.com/kata/5662b14e0a1fb8320a00005c)

## Description

Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

```js
{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
```

Your function should return `"Naughty!"` or `"Nice!"` depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return `"Nice!"`

## My Solution

**JavaScript**

```js
const naughtyOrNice = (data, str = JSON.stringify(data)) =>
  str.match(/Naughty/g).length > str.match(/Nice/g).length ? 'Naughty!' : 'Nice!';
```

### User Solution

**JavaScript**

```js
const naughtyOrNice = (data) => {
  let naughtyMeter = 0;

  for (const month in data) {
    for (const day in data[month]) {
      naughtyMeter += data[month][day] === 'Nice' ? 1 : -1;
    }
  }

  return naughtyMeter < 0 ? 'Naughty!' : 'Nice!';
};
```
