# [Alan Partridge III - London](https://www.codewars.com/kata/580a41b6d6df740d6100030c)

## Description

Ever the learned traveler, Alan Partridge has pretty strong views on London:

```
"Go to London. I guarantee you'll either be mugged or not appreciated.
Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."
```

**Task**

Your job is to check that the provided list / array of stations contains all of the stops Alan mentions. The list of stops are as follows:

```
Rejection
Disappointment
Backstabbing Central
Shattered Dreams Parkway
```

If all the stops appear in the given list / array, return `Smell my cheese you mother!`, if not, return `No, seriously, run. You will miss it.`.

## My Solution

**JavaScript**

```js
const alan = (x) =>
  ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'].every((stop) => x.includes(stop))
    ? 'Smell my cheese you mother!'
    : 'No, seriously, run. You will miss it.';
```

```js
const alan = (x) => {
  const stops = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
  const allVisited = stops.every((stop) => x.includes(stop));
  return allVisited ? 'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.';
};
```

**Python**

```py
def alan(arr):
    stops = ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"]
    all_visited = all(True if x in arr else False for x in stops)
    return "Smell my cheese you mother!" if all_visited else "No, seriously, run. You will miss it."
```

### User Solution

**JavaScript**

```js
const stops = RegExp.prototype.test.bind(/Rejection|Disappointment|Backstabbing Central|Shattered Dreams Parkway/);
function alan(x) {
  return [...new Set(x.filter(stops))].length === 4
    ? 'Smell my cheese you mother!'
    : 'No, seriously, run. You will miss it.';
}
```

**Python**

```py
def alan(arr):
    s = {'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'}
    return "Smell my cheese you mother!" if s.issubset(arr) else "No, seriously, run. You will miss it."
```
