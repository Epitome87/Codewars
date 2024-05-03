# [Blowing Birthday Candles](https://www.codewars.com/kata/6630da20f925eb3007c5a498)

## Description

## My Solution

**JavaScript**

```js
const blowCandles = (str) => {
  const candleArray = [...str].map(Number);
  let numBlows = 0;

  for (let i = 0; i < str.length; i++) {
    while (candleArray[i] > 0) {
      candleArray[i]--;
      candleArray[i + 1]--;
      candleArray[i + 2]--;
      numBlows++;
    }
  }

  return numBlows;
};
```

```js
const blowCandles = (str) => {
  const candleArray = [...str].map(Number);
  let numBlows = 0;

  for (let i = 0; i < str.length; i++)
    while (candleArray[i] > 0) {
      for (let j = i; j <= i + 2; j++) candleArray[j]--;
      numBlows++;
    }

  return numBlows;
};
```

**Python**

```py
def blow_candles(st):
    candles = [int(char) for char in st]
    num_blows = 0

    for i in range(len(candles)):
        while candles[i] > 0:
            for j in range(i, min(i + 3, len(candles))):
                candles[j] -= 1
            num_blows += 1

    return num_blows
```

### User Solution

**Python**

```py
def blow_candles(st):
    blow2 = blow1 = blows = 0
    for candle in map(int, st):
        blow0 = max(0, candle - blow1 - blow2)
        blows += blow0
        blow2, blow1 = blow1, blow0
    return blows
```
