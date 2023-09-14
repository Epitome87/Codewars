# [Player Contact Manager](https://www.codewars.com/kata/5b203de891c7469b520000b4)

## Description

You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.

**Examples**

```js
player_manager("John Doe, 8167238327, Jane Doe, 8163723827") returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
player_manager(nil) returns []
player_manager("") returns []
```

```js
playerManager("John Doe, 8167238327, Jane Doe, 8163723827") returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
playerManager(null) returns []
playerManager("")   returns []
```

Have at thee!

## My Solution

**JavaScript**

```js
const playerManager = (players) => {
  if (!players) return [];

  const result = [];
  const arr = players.split(', ');

  for (let i = 0; i < arr.length / 2; i++) {
    const [player, contact] = arr.slice(i * 2, i * 2 + 2);
    result.push({ player, contact: +contact });
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
const playerManager = (players) =>
  players
    ? players
        .split(`, `)
        .reduce((pre, val, idx, arr) => (idx % 2 ? pre : [...pre, { player: val, contact: +arr[idx + 1] }]), [])
    : [];
```
