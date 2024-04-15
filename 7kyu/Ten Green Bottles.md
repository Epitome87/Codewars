# [Ten Green Bottles](https://www.codewars.com/kata/5838e2978bbc04b7cd000008)

## Description

Who knows the nursery rhyme Ten Green Bottles?

Lyrics:

```
Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall.

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.
```

**Task**

Write some amazing code to reproduce the above lyrics starting from `n` green bottles!

- parameter `n` is 1 to 10
- newline terminates every line (including the last)
- don't forget the blank lines between the verses

## My Solution

**JavaScript**

```js
const tenGreenBottles = (n) => {
  const words = ['no', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  const result = [];

  for (let i = n; i >= 1; i--) {
    const sentence1 = `${words[i] + ' green bottle' + (i !== 1 ? 's' : '') + ' hanging on the wall,\n'}`.repeat(2);
    const sentence2 = `${i > 1 ? 'And if' : 'If that'} one green bottle should accidentally fall,\n`;
    const sentence3 = `There'll be ${words[i - 1].toLowerCase()} green bottle${
      i - 1 !== 1 ? 's' : ''
    } hanging on the wall.\n`;
    result.push(`${sentence1}${sentence2}${sentence3}`);
  }

  return result.join('\n');
};
```

**Python**

```py
def ten_green_bottles(n):
    words = ['no', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    result = []

    for i in range(n, 0, -1):
        sentence1 = f"{words[i]} green bottle{'s' if i != 1 else ''} hanging on the wall,\n" * 2
        sentence2 = f"{'And if' if i > 1 else 'If that'} one green bottle should accidentally fall,\n"
        sentence3 = f"There'll be {words[i - 1].lower()} green bottle{'s' if i - 1 != 1 else ''} hanging on the wall.\n"
        result.append(f"{sentence1}{sentence2}{sentence3}")

    return '\n'.join(result)
```
