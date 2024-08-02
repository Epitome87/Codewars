# [Finish Guess the Number Game](https://www.codewars.com/kata/568018a64f35f0c613000054)

## Description

Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

- If the user tries to guess more than the limit, the function should throw an error.
- If the user guess is right it should return true.
- If the user guess is wrong it should return false and lose a life.

Can you finish the game so all the rules are met?

## My Solution

**JavaScript**

```js
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives <= 0) throw Error('Already dead');
    if (n === this.number) return true;

    this.lives--;
    return false;
  }
}
```

**Python**

```py
class Guesser:
    def __init__(self, number, lives):
        self.number = number
        self.lives = lives

    def guess(self, n):
        if self.lives <= 0:
            raise Exception('Sorry, you have already died!')

        if self.number == n:
            return True

        self.lives -= 1
        return False
```
