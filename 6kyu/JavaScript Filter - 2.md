# [JavaScript Filter - 2](https://www.codewars.com/kata/5262fa26875ed24a3e000029)

## Description

A friend of yours is developing an application for a hotel. You should write a function that returns all names of the people on a given floor. Every floor has 6 rooms, and all rooms are numbered in a consecutive way.

The function has the following signature:

```js
function roomMates(rooms, floor) {}
```

The argument rooms holds all clients in an array, where the index (starts at 0) corresponds to the room-number and holds the name of the client.

A room is empty if the name at the corresponding array index is the empty string.

floor is an integer and denotes the floor whose names need to be returned. Floors are numbered starting at 1.

Your task is to return the names of all occupants on a given floor.

Example

```js
rooms = ['Jill', 'Jackson', 'Jan', 'Eve', '', 'John', 'Jimmy', 'Tom', '', 'Duke'];
```

```
Floor	Index/Room No.		Name
1	0	Jill
1	1	Jackson
1	2	Jan
1	3	Eve
1	4	(empty)
1	5	John
2	6	Jimmy
2	7	Tom
2	8	(empty)
2	9	Duke
```

`function roomMates( rooms, 1 )` should return `["Jill", "Jackson", "Jan", "Eve", "John"]`, and function `roomMates( rooms, 2 )` should return `["Jimmy", "Tom", "Duke"]`.

Hint: the filter-method of Javascript is handy here, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## My Solution

```js
const roomMates = (rooms, floor) => rooms.filter((room, idx) => floor === Math.floor(idx / 6) + 1 && room);
```

## User Solution

```js
const roomMates = (rooms, floor, roomsPerFloor = 6) =>
  rooms.slice((floor - 1) * roomsPerFloor, floor * roomsPerFloor).filter((r) => r);
```
