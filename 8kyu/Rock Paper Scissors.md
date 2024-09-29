# [Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)

## Description

Let's play! You have to return which player won! In case of a draw return `Draw!`.

**Examples (Input1, Input2 --> Output):**

    "scissors", "paper" --> "Player 1 won!"
    "scissors", "rock" --> "Player 2 won!"
    "paper", "paper" --> "Draw!"

![rockpaperscissors](http://i.imgur.com/aimOQVX.png)

## My Solution

**JavaScript**

```js
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  if ({ rock: 'scissors', paper: 'rock', scissors: 'paper' }[p1] === p2) return 'Player 1 won!';
  return 'Player 2 won!';
};
```

```js
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  if ((p1 === 'rock' && p2 === 'scissors') || (p1 == 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper'))
    return 'Player 1 won!';
  return 'Player 2 won!';
};
```

**Python**

```py
def rps(p1, p2):
    if p1 == p2: return 'Draw!'
    victories = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' }
    return f"Player {'1' if victories[p1] == p2 else '2'} won!"
```

### User Solution

**JavaScript**

```js
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
};
```

**Python**

```py
def rps(p1, p2):
    hand = {'rock':0, 'paper':1, 'scissors':2}
    results = ['Draw!', 'Player 1 won!', 'Player 2 won!']
    return results[hand[p1] - hand[p2]]
```
