# [Simple Fun #261: Whose Move](https://www.codewars.com/kata/59126992f9f87fd31600009b)

## Description

Two players - `"black"` and `"white"` are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

**Input/Output**

[input] string

`lastPlayer` / `$last_player`

`"black"` or `"white"` - whose move it was during the previous round.

[input] boolean `win` / `$win`

`true` if the player who made a move during the previous round won, `false` otherwise.

[output] a string

Return `"white"` if white is to move on the next round, and `"black"` otherwise.

**Example**

For `lastPlayer = "black" and win = false`, the output should be `"white"`.

For `lastPlayer = "white" and win = true`, the output should be `"white"`.

## My Solution

**JavaScript**

```js
const whoseMove = (lastPlayer, win) => (win ? lastPlayer : lastPlayer === 'white' ? 'black' : 'white');
```

```js
const whoseMove = (lastPlayer, win) => {
  if (lastPlayer === 'white') {
    return win ? 'white' : 'black';
  } else {
    return win ? 'black' : 'white';
  }
};
```

**Python**

```py
def whose_move(last_player, win):
    return last_player if win else 'white' if last_player == 'black' else 'black'
```
