# [Make Techno](https://www.codewars.com/kata/563c8540d50eb20bab00009a)

## Description

German music producer Herbert Von Klunkerkunt has been using the same formula to make industrial techno for over twenty years. Producing at 120 beats per minute, each 4-beat bar contains:

- 4 kick drum hits
- 8 hihat hits
- 2 clap hits

Write a program that takes the number of minutes and returns the number of "kicks", "hihats" and "claps" Klunkerkunt will need to fill each bar of his new track with percussion in an array. The total number of kicks, hihats and claps should be rounded to the nearest integer.

```js
function perc (3) {}
// should return ["360 kicks", "720 hihats", "180 claps"]
```

The function should return "invalid track time" if the number of minutes is:

- less than 1
- more than 100
- not a number

```js
function perc (0.22) {}
// should return "invalid track time"
```

## My Solution

**JavaScript**

```js
const perc = (mins) =>
  typeof mins !== 'number' || mins < 1 || mins > 100
    ? 'invalid track time'
    : [
        [4, ' kicks'],
        [8, ' hihats'],
        [2, ' claps'],
      ].map((v, i) => Math.round(mins * 30 * v[0]) + v[1]);
```

```js
const perc = (mins) => {
  if (typeof mins !== 'number' || mins < 1 || mins > 100) return 'invalid track time';

  const totalBeats = mins * 120;
  const bars = totalBeats / 4;

  const totalKick = bars * 4;
  const totalHi = bars * 8;
  const totalClap = bars * 2;
  const values = [totalKick, totalHi, totalClap];

  return ['kicks', 'hihats', 'claps'].map((v, i) => Math.round(values[i]) + ' ' + v);
};
```

### User Solution

**JavaScript**

```js
const perc = (mins) =>
  isNaN(mins) || mins < 1 || mins > 100
    ? `invalid track time`
    : [
        [120, `kicks`],
        [240, `hihats`],
        [60, `claps`],
      ].map((val) => `${Math.round(val[0] * mins)} ${val[1]}`);
```
