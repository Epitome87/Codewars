# [Optimum Coding School Location](https://www.codewars.com/kata/55738b0cffd95756c3000056)

## Description

**Preface**

You are currently working together with a local community to build a school teaching children how to code. First plans have been made and the community wants to decide on the best location for the coding school. In order to make this decision data about the location of students and potential locations is collected.

**Problem**

In order to be able to attract and teach as many students as possible we want to minimize the total traveling distance for potential students. The streets system is organized in a traditional grid system and students can only travel horizontally or vertically (not diagonal).

The locations of interested students is given as an array with the first value of each entry presenting the x coordinate and the second value presenting the y coordinate:

```js
var students = [[3,7],[2,2],[14,1], ...];
```

Potential locations are passed as an array of objects with an unique id, a x and y coordinate:

```js
var locations = [{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}, ...];
```

Your task is now to evaluate which of the school locations would be best to minimize the distance for all potential students to the school.

The desired output should consist of a string indicating the ID of the best suitable location and the x and y coordinates in the following form:

```js
'The best location is number 1 with the coordinates x = 3 and y = 4';
```

## My Solution

**JavaScript**

```js
const optimumLocation = (students, locations) => {
  const bestLocation = locations.reduce(
    (acc, loc) => {
      const distance = students.reduce((sum, [x, y]) => sum + Math.abs(x - loc.x) + Math.abs(y - loc.y), 0);
      return distance < acc.distance ? { ...loc, distance } : acc;
    },
    { id: null, x: null, y: null, distance: Infinity }
  );

  return `The best location is number ${bestLocation.id} with the coordinates x = ${bestLocation.x} and y = ${bestLocation.y}`;
};
```

```js
const optimumLocation = (students, locations) => {
  const distances = locations.map((location) =>
    students.reduce((acc, [x, y]) => acc + Math.abs(x - location.x) + Math.abs(y - location.y), 0)
  );
  const shortestDistance = Math.min(...distances);
  const shortestLocation = locations[distances.findIndex((x) => x === shortestDistance)];

  return `The best location is number ${shortestLocation.id} with the coordinates x = ${shortestLocation.x} and y = ${shortestLocation.y}`;
};
```
